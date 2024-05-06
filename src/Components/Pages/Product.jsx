import React, { useContext, useState } from "react";
import "../Pages/Css/Product.css";
import { useParams } from "react-router-dom";
import CatCollections from "../CategoryCollections";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./ShopContext";

const Product = ({
  className,
  width,
  height,
  alt,
  magnifierHeight = 420,
  magnifierWidth = 200,
  zoomLevel = 1.5,
}) => {
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const { productID } = useParams();
  const product = CatCollections.find(
    (prod) => prod.id === parseInt(productID)
  );
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  };
  const handleIncrement = () => {
    if (count < 2) {
      setCount(count + 1);
    } else {
      if (count === 2) {
        alert("We're sorry! Only 2 unit's allowed in each order");
      }
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    if (!selectedSize || selectedQuantity <= 0) {
      alert("Please select a size and quantity.");
      return;
    }
    addToCart(product.id);
    alert("Added to cart");
  };
  
  const handleWish = () => {
    addToWishlist(product.id);
    alert("Added to Wishlist");
  };

  const mouseEnter = (e) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const mouseLeave = (e) => {
    e.preventDefault();
    setShowMagnifier(false);
  };

  const mouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  return (
    <div className="container product">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12 pr">
          <div className="imgfluid relative inline-block">
            <img
              src={product.image}
              className={className}
              width={width}
              height={height}
              alt={alt}
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseLeave={(e) => mouseLeave(e)}
              onMouseMove={(e) => mouseMove(e)}
            />
            <p
              style={{
                textAlign: "center",
              }}
            >
              <i class="fa-solid fa-magnifying-glass-plus">hover here</i>
            </p>
            <div
              style={{
                display: showMagnifier ? "" : "none",
                position: "absolute",
                pointerEvents: "none",
                height: `${magnifierHeight}px`,
                width: `${magnifierWidth}px`,
                opacity: "1",
                border: "1px solid lightgrey",
                backgroundColor: "white",
                borderRadius: "5px",
                backgroundImage: `url('${product.image}')`,
                backgroundRepeat: "no-repeat",
                top: `${y - magnifierHeight / 3}px`,
                left: `${x - magnifierWidth / 2}px`,
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,
                backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                backgroundPositionY: `${
                  -y * zoomLevel + magnifierHeight / 2
                }px`,
              }}
            />
          </div>

          <div className="small-img-grp">
            <img src={product.image} alt=".." className="small-img" />
            <img src={product.image} alt=".." className="small-img" />
            <img src={product.image} alt=".." className="small-img" />
            <img src={product.image} alt=".." className="small-img" />
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          <div className="breadcrumb">
            <NavLink to="/" style={{ textDecorationLine: "none" }}>
              <h5>Home</h5>
            </NavLink>
            <i className="fa-solid fa-chevron-right"></i>

            <h5>Shop</h5>
            <i className="fa-solid fa-chevron-right"></i>

            <h5>{product.category}</h5>
            <i className="fa-solid fa-chevron-right"></i>

            <h5>{product.name}</h5>
          </div>
          <h2 className="py-2">{product.name}</h2>
          <h4>${product.price}</h4>
          <div className="mt-3">
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </span>
          </div>
          <select
            name="Select Size"
            className="my-3 select"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="select">Select Size</option>
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="">S</option>
          </select>
          <div
            className="count-buttons"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count === 3}>
              +
            </button>
          </div>

          <button className="addtowishlist mt-3" onClick={handleWish}>
            Add to WishList
          </button>
          <button className="addtocart mt-3 mr-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <h4 className="mt-4 mb-4">Product Details</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque
            esse non aspernatur fugit veritatis laboriosam molestias incidunt
            dolor! Repudiandae inventore tenetur dicta ab ipsa saepe,
            perspiciatis cum laborum cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
