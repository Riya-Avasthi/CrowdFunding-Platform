
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosConfig"; // ✅ Updated import
import "./LogReg.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", 
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      setError("Please select a role before submitting.");
      return;
    }

    try {
      const response = await axios.post("/auth/register", formData); // ✅ Using baseURL
      console.log("Registration Success:", response.data);

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setError(error.response?.data?.error || "Registration failed!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="fund_donor">Fund Donor</option>
          <option value="fund_raiser">Fund Raiser</option>
        </select>

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <span className="link-text" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
