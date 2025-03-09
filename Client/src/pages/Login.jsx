
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosConfig"; // ✅ Updated import
import "./LogReg.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;  // ✅ Correctly extract from `formData`

    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,    // ✅ Now references extracted values
            password
        });

        // ✅ Safely store the token
        try {
            localStorage.setItem("token", response.data.token);
        } catch (storageError) {
            console.warn("⚠️ LocalStorage access error:", storageError);
        }

        alert("✅ Login Successful!");
        navigate("/");
    } catch (error) {
        console.error("❌ Error during login:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Login failed. Please try again.");
    }
};



  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span className="link-text" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
