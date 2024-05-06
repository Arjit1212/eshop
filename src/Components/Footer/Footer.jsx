import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Specify smooth scrolling behavior
    });
  };
  return (
    <>
      <div className="container footer">
        <div className="row">
          <div className="col-12 footer-1">
            <h1>E.Shop</h1>
            <p>E.Shop is a very slick and clean eCommerce website.</p>
            <div className="icons">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-2">
            <h4>Information</h4>
            <hr className="customf-hr"></hr>
            <p>Our Stores</p>
            <p>About Us</p>
            <p>Buisness With Us</p>
            <p>Delivery Information</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-2">
            <h4>Account</h4>
            <hr className="customf-hr"></hr>
            <p>My Account</p>
            <p>Wishlist</p>
            <p>Order History</p>
            <p>Specials</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-2">
            <h4>Useful Links</h4>
            <hr className="customf-hr"></hr>
            <p>Shipping Policy</p>
            <p>Stores</p>
            <p>Returns</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-2">
            <h4>Services</h4>
            <hr className="customf-hr"></hr>
            <p>Support</p>
            <p>Warranty</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="container footerz">
        <div className="row">
          <div className="col-12">
            <p> &copy; 2024 E.Shop | arjitwebservices</p>
            <Link onClick={scrollToTop}>
              <i class="fa-solid fa-chevron-up"></i>
            </Link>
            <div className="payment-icons">
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-amazon-pay"></i>
              <i className="fa-brands fa-cc-apple-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
