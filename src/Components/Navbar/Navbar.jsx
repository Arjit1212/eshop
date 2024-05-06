import React, { useContext, useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Pages/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems, getTotalWishItems } = useContext(ShopContext);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > window.innerHeight * 0.9) {
        navbar.classList.add("transparent-bg");
      } else {
        navbar.classList.remove("transparent-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWishlist =()=>{
    setMenu('wishlist')
    window.scrollTo(0,0);
    
  }
  const handleUser =()=>{
    setMenu('user')
    window.scrollTo(0,0);
  }
  const handleCart =()=>{
    setMenu('cart')
    window.scrollTo(0,0);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link
            to={"/"}
            className="navbar-brand me-auto"
            onClick={() => window.scrollTo(0, 0)}
          >
            <b style={{color:'#FF7235'}}>E.</b>Shop
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                E.Shop
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <a
                    onClick={() => {
                      setMenu("home");
                      window.scrollTo(0, 0);
                    }}
                    className="nav-link active mx-lg-2"
                    style={{ color: menu === "home" ? "#FF7235" : "black" }}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </Link>
                <li className="nav-item dropdown">
                  <a
                    onClick={() => {
                      setMenu("page");
                    }}
                    className="nav-link dropdown mx-lg-2"
                    style={{ color: menu === "page" ? "red" : "black" }}
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <Link to={"/about"} className="dropdown-item"
                    onClick={() => window.scrollTo(0, 0)}>
                      About
                    </Link>
                    <Link to={"/services"} className="dropdown-item"
                    onClick={() => window.scrollTo(0, 0)}>
                      Services
                    </Link>
                    <Link
                      to={"/contact"}
                      style={{ textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="dropdown-item"
                    >
                      Contact Us
                    </Link>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    onClick={() => {
                      setMenu("shop");
                    }}
                    className="nav-link dropdown mx-lg-2"
                    style={{ color: menu === "shop" ? "#FF7235" : "black" }}
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <Link
                      to={"/mens"}
                      style={{ textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                      a
                      className="dropdown-item"
                    >
                      Men
                    </Link>
                    <Link
                      to={"/womens"}
                      style={{ textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="dropdown-item"
                    >
                      Women
                    </Link>
                    <Link
                      to={"/kids"}
                      style={{ textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="dropdown-item"
                    >
                      Kids
                    </Link>
                    <Link
                      to={"/accessories"}
                      style={{ textDecoration: "none" }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="dropdown-item"
                    >
                      Accessories
                    </Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link  mx-lg-2" aria-current="page" href="/">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
                <Link
                className="nav-item"
                  to={"/wishlist"}
                  onClick={handleWishlist}
                  style={{textDecoration: "none"}}
                >
                 
                    <li
                      className="nav-link  mx-lg-2"
                      aria-current="page"
                      href="/"
                      style={{ color: menu === "wishlist" ? "#FF7235" : "black"}}
                    >
                      <i class="fa-solid fa-heart"></i>
                      {getTotalWishItems() > 0 ? (
                        <p className="updatecount">{getTotalWishItems()}</p>
                      ) : null}
                    </li>
                 
                </Link>
              </ul>
            </div>
          </div>
          <Link
            to={"/login"}
            className="user"
            onClick={handleUser}
                  style={{ color: menu === "user" ? "#FF7235" : "black" , textDecoration: "none" }}
          >
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link
            to={"/cart"}
            onClick={handleCart}
                  style={{ color: menu === "cart" ? "#FF7235" : "black" , textDecoration: "none" }}
            className="cart"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {getTotalCartItems() > 0 ? (
              <p className="updatecount">{getTotalCartItems()}</p>
            ) : null}
          </Link>
          <button
            className="navbar-toggler pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
