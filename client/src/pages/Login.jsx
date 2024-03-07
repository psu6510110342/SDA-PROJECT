import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data); // Make sure err.response.data contains the error message
    }
  };

  return (
    <div className="auth-new">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center" style={{ borderRadius: '1rem' }}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4" style={{ fontSize: '1.2rem', borderRadius: '10px', width: '100%', height: '10%' }}>
                      <input
                        required
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '10px', width: '100%', height: '100%' }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4 mb-5 pb-lg-2" style={{ fontSize: '1.2rem', borderRadius: '10px', width: '100%', height: '10%' }}>
                      <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        style={{ padding: '10px', borderRadius: '10px', width: '100%', height: '100%' }}
                      />
                    </div>



                    <button className="btn btn-outline-light btn-lg px-5 " type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                    {err && <p>{err}</p>}
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white mx-4 px-2">
                        <i className="fab fa-twitter fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{' '}
                      <Link className="tap-reg" to="/register">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;