import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {product.map((p) => (
          <div key={p._id} className="col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                borderRadius: "15px",
                backgroundColor: "#fff",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 105, 180, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Image Section */}
              <div className="position-relative">
                <img
                  src={p?.images[0]?.url}
                  alt={p.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                {p.discount && (
                  <span
                    className="badge position-absolute "
                    style={{
                      backgroundColor: "#ff4da6",
                      fontSize: "0.8rem",
                      borderRadius: "8px",
                      padding: "6px 10px",
                    }}
                  >
                    {p.discount}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="card-body text-center">
                <h5
                  className="card-title fw-bold"
                  style={{ color: "#e91e63" }}
                >
                  {p.name}
                </h5>

                <p className="mb-1 fw-semibold" style={{ color: "#28a745" }}>
                  ₹{p.price}
                </p>
                <p className="text-muted mb-1">Free Delivery</p>

                <p className="mb-3" style={{ color: "#ff69b4" }}>
                  ⭐ {p.rating}{" "}
                  <small className="text-secondary">
                    ({p.reviews} Reviews)
                  </small>
                </p>

                <NavLink
                  to={`/product/${p._id}`}
                  className="btn w-100 fw-semibold"
                  style={{
                    backgroundColor: "#ff4da6",
                    border: "none",
                    color: "white",
                    borderRadius: "30px",
                    padding: "10px 0",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e91e63")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4da6")}
                >
                  View Product
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
