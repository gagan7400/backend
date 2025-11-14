import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

function CategoryPage() {
  const { name } = useParams();
  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/product/filter-product-category/" + name
        );
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getdata();
  }, [name]);

  useEffect(() => {
    if (categoryName) {
      nav("/category/" + categoryName);
    }
  }, [categoryName, nav]);

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <div className="container">
        <h1
          className="text-center fw-bold mb-5"
          style={{
            color: "black",
            letterSpacing: "1px",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Products For You — {name?.toUpperCase()}
        </h1>

        <div className="row">
          {/* 🎀 Sticky Sidebar */}
          <div className="col-md-3 mb-4">
            <div
              className="p-4 shadow-sm rounded-3"
              style={{
                backgroundColor: "#fff",
                position: "sticky",
                top: "90px",
                zIndex: "100",
                border: "1px solid #f8bbd0",
              }}
            >
              <h4
                className="fw-bold mb-4 pb-2 border-bottom text-center"
                style={{
                  color: "black",
                  borderColor: "#f8bbd0",
                }}
              >
                Filter Options
              </h4>

              {/* Filter by Category */}
              <div className="mb-4">
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#e91e63" }}
                >
                  Filter by Category
                </label>
                <select
                  className="form-select"
                  style={{
                    borderColor: "#f48fb1",
                    borderRadius: "8px",
                    color: "#555",
                  }}
                  onChange={(e) => setCategoryName(e.target.value)}
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

              {/* Category Section */}
              <div>
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#e91e63" }}
                >
                  Category List
                </label>
                <select
                  className="form-select"
                  style={{
                    borderColor: "#f48fb1",
                    borderRadius: "8px",
                    color: "#555",
                  }}
                >
                  <option>Electronic</option>
                  <option>Beauty</option>
                  <option>Clothes</option>
                  <option>Menswear</option>
                </select>
              </div>
            </div>
          </div>

          {/* 🌸 Product Section */}
          <div className="col-md-9">
            {product.length > 0 ? (
              <ProductCard product={product} />
            ) : (
              <div
                className="text-center p-5 rounded-3 shadow-sm"
                style={{
                  backgroundColor: "#fff",
                  color: "#e91e63",
                  fontWeight: "600",
                }}
              >
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
