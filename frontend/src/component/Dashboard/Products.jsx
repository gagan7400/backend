import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";

function Products() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/product/get-products")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data || []);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const updateHandler = (id) => {
    nav("/update-product/" + id);
  };

  const deleteHandler = (id) => {
    alert("🗑 Delete function will be added soon for ID: " + id);
  };

  return (
    <div className="container my-5">
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#e91e63" }}
      >
        Product List
      </h2>

      <div className="table-responsive shadow-sm rounded-4">
        <table className="table table-bordered align-middle text-center">
          <thead
            style={{
              backgroundColor: "#e91e63",
              color: "white",
              fontSize: "18px",
            }}
          >
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Price (₹)</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody style={{ backgroundColor: "white" }}>
            {data.length > 0 ? (
              data.map((v, i) => (
                <tr key={v._id} className="border-bottom">
                  <td>{i + 1}</td>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                  <td className="text-capitalize">{v.category}</td>
                  <td>
                    <img
                      src={v?.images?.[0]?.url}
                      alt={v.name}
                      width="80"
                      height="80"
                      className="rounded-3 border"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm me-2"
                      style={{
                        backgroundColor: "#e91e63",
                        color: "white",
                        borderRadius: "8px",
                      }}
                      onClick={() => updateHandler(v._id)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-sm btn-dark"
                      style={{ borderRadius: "8px" }}
                      onClick={() => deleteHandler(v._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-muted py-4">
                  No products available 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
