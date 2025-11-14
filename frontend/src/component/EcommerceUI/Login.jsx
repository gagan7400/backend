import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const { data } = await axios.post("http://localhost:4000/api/user/login", user);
      console.log("Login success:", data);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4 text-pink fw-bold">Login Account</h2>

        <form onSubmit={submithandler}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control border-dark-subtle"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control border-dark-subtle"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <NavLink to="/forget" className="small text-pink text-decoration-none">
              Forgot Password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 fw-semibold text-white"
            style={{ backgroundColor: '#e91e63' }}
          >
            Login
          </button>

          <p className="text-center mt-3 mb-0">
            New user?{" "}
            <NavLink to="/signup" className="text-pink fw-semibold text-decoration-none">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
