import React from "react";

function Cart() {
  return (
    <div className="container py-5 bg-white">
      <div className="row g-4">
        {/* LEFT SECTION */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-4 rounded-4">
            <h3 className="fw-bold mb-4 text-dark">🛍 Product Details</h3>

            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center border-bottom pb-3 mb-3">
              <img
                src="https://images.meesho.com/images/products/430702251/kronx_512.avif?width=360"
                alt="Product"
                className="rounded-3 me-md-4 mb-3 mb-md-0"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />

              <div className="flex-grow-1">
                <h5 className="fw-semibold text-dark">
                  Frekman Stylish Cotton Blend Check Men's Shirt
                </h5>
                <p className="fw-bold text-pink fs-5 mb-1">₹250</p>
                <p className="text-muted small mb-1">All issues easy returns</p>
                <p className="text-muted small">
                  Size: <b>S</b> &nbsp;•&nbsp; Qty: <b>1</b>
                </p>

                <div className="d-flex gap-2 mt-2">
                  <button className="btn btn-outline-danger btn-sm rounded-pill px-3">
                    ✖ Remove
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm rounded-pill px-3"
                    style={{ borderColor: "#e91e63", color: "#e91e63" }}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 rounded-4">
            <h5 className="fw-bold text-dark mb-3">💰 Price Details (1 Item)</h5>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Total Product Price</span>
              <span className="text-dark fw-semibold">₹250</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold text-dark">Order Total</span>
              <span className="fw-bold text-pink fs-5">₹250</span>
            </div>

            <div className="alert alert-light text-muted small border rounded-3">
              Clicking on <b>'Continue'</b> will not deduct any money.
            </div>

            <button
              className="btn w-100 py-2 fw-semibold text-white rounded-pill"
              style={{ backgroundColor: "#e91e63" }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
