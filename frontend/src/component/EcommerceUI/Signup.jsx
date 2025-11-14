import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      let formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      if (image) {
        for (let i of image) formdata.append("image", i);
      }

      const { data } = await axios.post("http://localhost:4000/api/user/register", formdata);
      console.log(data);
      alert("User registered successfully!");
      navigate("/otp");
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: '450px' }}>
        <h2 className="text-center mb-4 text-pink fw-bold">Create Account</h2>

        <form onSubmit={submithandler}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control border-dark-subtle"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Profile Image</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={(e) => setImage(e.target.files)}
            />
          </div>

          {/* Login Redirect */}
          <p className="text-center mt-2 mb-3">
            Already a user?{" "}
            <NavLink to="/login" className="text-pink fw-semibold text-decoration-none">
              Login
            </NavLink>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="btn w-100 py-2 fw-semibold text-white"
            style={{ backgroundColor: '#e91e63' }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
