import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", inputs);
      const { token, ...userData } = res.data;
  
      // Store the token in local storage
      localStorage.setItem('token', token);
  
      // Do something with the user data if needed
      setCurrentUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Throw the error to be caught by the calling function
    }
  };
  
  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};