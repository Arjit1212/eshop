import React from "react";
import "../Slides/Slides.css";
import { Link } from "react-router-dom";


const Slides = () => {  
  return (
    <>
      <div id="combinedCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="zoom-in">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#combinedCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#combinedCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#combinedCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/slide1.jpg" className="d-block w-100" alt="..."  />
            <div className="carousel-caption">
              <h5>Sale Upto 50% Off </h5>
              <p>
                Wide Offers On All Products
              </p>
              <p>
                <button className="slidebtn">Shop Now</button>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="assets/slide2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>New Collections</h5>
              <p>
                All New Collections
              </p>
              <p>
                <button className="slidebtn">Shop Now</button>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="assets/slide3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>New Trends</h5>
              <p>
                Follow The Trend
              </p>
              <p>
                <Link><button className="slidebtn">Shop Now</button></Link>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#combinedCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#combinedCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slides;
