import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";

function UpdateProduct() {
  const nav = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [discount, setDiscount] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/product/get-product/${id}`
        );
        const p = data.data;
        setName(p.name);
        setPrice(p.price);
        setStock(p.stock);
        setCategory(p.category);
        setRating(p.rating);
        setDiscount(p.discount);
        setReview(p.review);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    getProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(
        `http://localhost:4000/api/product/update-product/${id}`,
        { name, price, stock, category, review, rating, discount },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      alert("✅ Product updated successfully!");
      nav("/products");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("❌ Failed to update product.");
    }
  };

  return (
    <div
      className="container py-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
      <div
        className="card p-4 shadow-lg rounded-4"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#e91e63" }}>
          Update Product
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
                  <option value="electronic">Electronic</option>
                  <option value="beauty">Beauty</option>
                  <option value="footwear">Footwear</option>
                  <option value="ethnic-wear">Ethnic Wear</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="accessories">Accessories</option>
                  <option value="menswear">Menswear</option>
                  <option value="western-dresses">Western Dresses</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Price (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Stock</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Rating</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Discount (%)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Review</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter product review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 fw-bold"
            style={{
              backgroundColor: "#e91e63",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
