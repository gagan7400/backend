import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const admin = { email, password };
      const { data } = await axios.post(
        "http://localhost:4000/api/admin/loginAdmin",
        admin,
        { withCredentials: true }
      );

      console.log("Login success:", data);
      localStorage.setItem("adminToken", data.token || "true");
      alert("✅ Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("❌ Invalid email or password!");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-white">
      <div
        className="col-md-6 shadow p-5 rounded-4"
        style={{
          backgroundColor: "white",
          maxWidth: "450px",
          width: "100%",
          
        }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#e91e63" }}>
          Admin Login
        </h2>

        <form onSubmit={submithandler}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg border-dark-subtle"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg border-dark-subtle"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-lg fw-semibold"
              style={{
                backgroundColor: "#e91e63",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-muted">
          © 2025 Admin Panel —{" "}
          <span style={{ color: "#e91e63" }}>Secure Access</span>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
