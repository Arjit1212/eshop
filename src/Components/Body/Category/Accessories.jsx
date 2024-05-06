import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Category/Mwa.css";
import { ShopContext } from "../../Pages/ShopContext.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Accessories = () => {
  const { addToWishlist, CatCollections, likedItems } = useContext(ShopContext);
  const acc = CatCollections.filter((prod) => prod.category === "accesories");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="container mainmwa">
        <div className="row">
          <div className="col-12 banner">
            <img src="assets/banner_mens.png" alt="" />
          </div>
        </div>
        <h2>Accessories Collections</h2>
        <div className="row mwa">
          <Slider {...settings}>
            {acc.map((prod) => (
              <div className="col-12 cat" key={prod.id}>
                <img src={prod.image} alt={prod.name} />
                <div className="overlay-cat">
                  <span
                    onClick={() => {
                      addToWishlist(prod.id);
                      alert("Added to Wishlist");
                    }}
                  >
                    <i
                      className={`fa-solid fa-heart ${
                        likedItems[prod.id] ? "colorred" : ""
                      }`}
                      id="wishlist"
                    ></i>
                  </span>
                  <span>{prod.category}</span>
                  <h4>{prod.name}</h4>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span>${prod.price}</span>
                  <Link
                    to={`/product/${prod.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <button>QUICKVIEW</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mainmwa">
        <div className="row">
          <div className="col-12 banner">
            <img src="assets/banner_mens.png" alt="" />
          </div>
        </div>
        <h2>Accessories Collections</h2>
        <div className="row mwa">
          {acc.map((prod) => (
            <div className="col-lg-3 col-md-6 col-12 cat" key={prod.id}>
              <img src={prod.image} alt={prod.name} />
              <div className="overlay-cat">
                <span
                  onClick={() => {addToWishlist(prod.id); alert('Added to Wishlist');}}
                >
                  <i
                    className={`fa-solid fa-heart ${
                      likedItems[prod.id] ? "colorred" : ""
                    }`}
                    id="wishlist"
                  ></i>
                </span>
                <span>{prod.category}</span>
                <h4>{prod.name}</h4>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </span>
                <span>${prod.price}</span>
                <Link
                  to={`/product/${prod.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button>QUICKVIEW</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Accessories;
