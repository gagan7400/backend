import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';

function OTP() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || otp.trim().length < 4) {
      alert("Please enter both Email and full OTP");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/api/user/verify-user", { email, otp });

      if (data.success) {
        alert("✅ OTP Verified Successfully!");
        nav("/login");
      } else {
        alert(data.message || "❌ Invalid OTP.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Verification failed. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: '400px' }}>
        <h2 className="text-center text-pink fw-bold mb-3">OTP Verification</h2>
        <p className="text-center text-muted mb-4">Enter your email and the OTP sent to it</p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
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

          {/* OTP Input */}
          <div className="mb-4">
            <label className="form-label fw-semibold">OTP</label>
            <input
              type="text"
              className="form-control border-dark-subtle"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-100 py-2 fw-semibold text-white"
            style={{ backgroundColor: '#e91e63' }}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTP;
