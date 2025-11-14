import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ui.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/product/get-product/" + id
        );
        setProduct(data.data);
        console.log(data);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    getData();
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="row align-items-center shadow-lg rounded-4 p-4 bg-white">
        {/* Product Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={product?.images?.[0]?.url}
            alt={product?.name}
            className="img-fluid rounded-4 shadow-sm product-image"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <h2 className="fw-bold text-dark mb-3">{product?.name}</h2>
          <p className="text-muted mb-2">
            <strong>Category:</strong> {product?.category}
          </p>

          {/* Price Section */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <h3 className="text-pink fw-bold mb-0">₹{product?.price}</h3>
            <span className="text-decoration-line-through text-secondary fs-5">
              ₹{Math.round(product?.price * (1 + product?.discount / 100))}
            </span>
            <span className="badge bg-pink text-white fs-6">
              {product?.discount}% OFF
            </span>
          </div>

          {/* Ratings */}
          <div className="mb-4">
            <span className="text-warning fs-5">⭐ {product?.rating}</span>
            <small className="text-muted ms-2">
              ({product?.rating} Ratings & 7,545 Reviews)
            </small>
          </div>

          {/* Description */}
          <p className="text-secondary mb-4">
            {product?.description || "A premium quality product just for you!"}
          </p>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-pink flex-fill fw-semibold py-2 shadow-sm">
              Add to Cart
            </button>
            <button className="btn btn-outline-pink flex-fill fw-semibold py-2 shadow-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
