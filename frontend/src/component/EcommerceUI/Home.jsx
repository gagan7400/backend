import { useNavigate } from "react-router-dom";
import ProductCard from '../EcommerceUI/ProductCard';
import './ui.css'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home() {
    let nav = useNavigate();
    let [product, setProduct] = useState([])
      const [categoryName, setCategoryName] = useState("");
    
    const handleClick = (name) => {
        nav("/category/" + name);

    }
        ;
    useEffect(() => {
        let getdata = async () => {
            let { data } = await axios.get("http://localhost:4000/api/product/get-products");
            setProduct(data.data);
            console.log(data);
        }
        getdata()
    }, [])

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
        <>
            <div className="image-container">
                <img
                    src="https://images.meesho.com/images/marketing/1760553615790.webp"
                    alt="Main Banner"
                    width="100%" height="450px" />
            </div>

            <div className="main-container" >
                <div className="category" >
                    <div className="child-category" onClick={() => { handleClick("ethnic-wear") }}  >
                        <img src="https://images.meesho.com/images/marketing/1744634654837.webp" alt="" />
                        <p>Ethnic Wear</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("western-dressess") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634725496.webp" alt="" />
                        <p>Western Dresses</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("menswear") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634780426.webp" alt="" />
                        <p>Menswear</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("footwear") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634814643.webp" alt="" />
                        <p>Footwear</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("home-decor    ") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634835018.webp" alt="" />
                        <p>Home Decor</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("beauty") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634871107.webp" alt="" />
                        <p>Beauty</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("accessories") }} >
                        <img src="https://images.meesho.com/images/marketing/1744634909968.webp" alt="" />
                        <p>Accessories</p>
                    </div>
                    <div className="child-category" onClick={() => { handleClick("electronic") }} style={{ paddingTop: "20px" }}>
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" className="image-electronic" />
                        <p>Electronic</p>
                    </div>
                </div>

            </div>


            <div className="main-image">
                <div className="parent-image">
                    <img
                        src="https://images.meesho.com/images/marketing/1744698265981.webp"
                        alt="Main Hero"
                    />

                    <div className="mainChildImage">
                        <div className="child-image">
                            <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="" />
                        </div>
                        <div className="child-image">
                            <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="" />
                        </div>
                        <div className="child-image">
                            <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="" />
                        </div>
                        <div className="child-image">
                            <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-product-section">
                <div className="sidebar-product">
                    <h1>Product  For You</h1>
                    <div className="filter-section">
                        <h3>Filter</h3>
                        <select name="" id=""   onChange={(e) => setCategoryName(e.target.value)}
>Filter
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
                    <div className="category-section">
                        <h3>Category</h3>
                        <select name="" id="">Filter
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

                </div>
                <div className="productcard-section">
                    <ProductCard product={product} />
                </div>
            </div>
        </>
    );
}

export default Home;
