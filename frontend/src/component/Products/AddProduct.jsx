import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    rating: "",
    discount: "",
    review: "",
  });
  const [images, setImages] = useState([]);
  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) return alert("Please login first!");

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      images.forEach((file) => data.append("images", file));

      const res = await axios.post(
        "http://localhost:4000/api/product/create-product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Product added successfully!");
      nav("/update-product");
      console.log(res.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("❌ Error adding product. Check console for details.");
    }
  };

  return (
    <div className="container py-5 bg-white">
      <div className="card shadow-lg border-0 rounded-4 p-5 mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#e91e63" }}>
          ➕ Add New Product
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Product Name", name: "name", type: "text" },
            { label: "Price (₹)", name: "price", type: "number" },
            { label: "Stock", name: "stock", type: "number" },
            { label: "Rating", name: "rating", type: "number" },
            { label: "Discount (%)", name: "discount", type: "number" },
          ].map((input) => (
            <div className="mb-3" key={input.name}>
              <label className="form-label fw-semibold text-dark">{input.label}</label>
              <input
                type={input.type}
                className="form-control border-dark-subtle"
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Category</label>
            <select
              className="form-select border-dark-subtle"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="beauty">Beauty</option>
              <option value="ethnic-wear">Ethnic Wear</option>
              <option value="western-dressess">Western Dresses</option>
              <option value="menswear">Menswear</option>
              <option value="home-decor">Home Decor</option>
              <option value="accessories">Accessories</option>
              <option value="footwear">Footwear</option>
              <option value="electronic">Electronic</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Review</label>
            <textarea
              className="form-control border-dark-subtle"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Upload Images</label>
            <input
              type="file"
              multiple
              className="form-control border-dark-subtle"
              onChange={handleImageChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold text-white py-2 rounded-pill"
            style={{ backgroundColor: "#e91e63" }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
