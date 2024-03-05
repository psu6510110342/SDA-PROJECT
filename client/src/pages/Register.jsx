import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
      });
      const [err,setError] = useState(null)
      const navigate = useNavigate()
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleSubmit = async e =>{
        try{
        e.preventDefault()
         await axios.post("http://localhost:8800/api/auth/register", inputs);
         navigate("/login")
        }
        catch(err){
            setError(err.response.data);
        }
      }
      console.log(inputs);
return (
  <div className="auth-new">
      <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                          <div className="card-body p-5 text-center" style={{ borderRadius: '1rem' }}>
                              <div className="mb-md-5 mt-md-4 pb-5">
                                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                  <p className="text-white-50 mb-5">Please enter your email and password!</p>

                                  <div className="form-outline form-white mb-4">
                                  <input required type="text" placeholder="username" name="username"
          onChange={handleChange}/>
                                  </div>

                                  <div className="form-outline form-white mb-4">
                                  <input required type="email" placeholder="email" name="email"
          onChange={handleChange}/>
                                  </div>

                                  <div className="form-outline form-white mb-4 mb-5 pb-lg-2">
                                  <input required type="password" placeholder="password" name="password"
          onChange={handleChange}/>
                                  </div>

                                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>
                                      Register
                                  </button>
                                  
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
                                      <Link className="tap-reg" to="/login">Login</Link>
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

export default Register