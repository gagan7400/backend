import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Shield,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column justify-content-between p-3 shadow"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#fff",
        borderRight: "3px solid #f8bbd0",
        position: "sticky",
        top: "0",
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-4">
        <h3
          className="fw-bold"
          style={{ color: "#e91e63", letterSpacing: "1px" }}
        >
          Admin Panel
        </h3>
      </div>

      {/* MENU */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard"
            className="nav-link d-flex align-items-center gap-2 fw-semibold"
            style={({ isActive }) => ({
              color: isActive ? "#e91e63" : "#000",
              backgroundColor: isActive ? "#fce4ec" : "transparent",
              borderRadius: "8px",
              padding: "8px 12px",
            })}
          >
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard/users"
            className="nav-link d-flex align-items-center gap-2 fw-semibold"
            style={({ isActive }) => ({
              color: isActive ? "#e91e63" : "#000",
              backgroundColor: isActive ? "#fce4ec" : "transparent",
              borderRadius: "8px",
              padding: "8px 12px",
            })}
          >
            <Users size={20} /> Users
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard/products"
            className="nav-link d-flex align-items-center gap-2 fw-semibold"
            style={({ isActive }) => ({
              color: isActive ? "#e91e63" : "#000",
              backgroundColor: isActive ? "#fce4ec" : "transparent",
              borderRadius: "8px",
              padding: "8px 12px",
            })}
          >
            <Package size={20} /> Products
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard/orders"
            className="nav-link d-flex align-items-center gap-2 fw-semibold"
            style={({ isActive }) => ({
              color: isActive ? "#e91e63" : "#000",
              backgroundColor: isActive ? "#fce4ec" : "transparent",
              borderRadius: "8px",
              padding: "8px 12px",
            })}
          >
            <ShoppingBag size={20} /> Orders
          </NavLink>
        </li>
      </ul>

      {/* LOGOUT BUTTON */}
      <div className="mt-auto">
        <button
          className="btn w-100 fw-bold text-white"
          style={{
            backgroundColor: "#e91e63",
            borderRadius: "10px",
          }}
          onClick={handleLogout}
        >
          <LogOut className="me-2" size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
