import React from "react";
import "../Category/Category.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 120 });

const Category = () => {
  return (
    <>
      <section id="category" className="category-section-padding">
        <div className="container" data-aos="fade-down">
          <div className="row parent">
            <div className="col-lg-4 col-md-12 col-sm-12 child">
              <img
                src="assets/categorymen.png"
                alt="..."
                height={450}
                className="catimg"
              />
              <Link to={"/mens"} onClick={() => window.scrollTo(0, 0)}>
                <div className="children">
                  <h1>Mens</h1>
                  <p>Shop Now</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 child">
              <img
                src="assets/categorywomen.png"
                alt="..."
                height={450}
                className="catimg"
              />
              <Link to={"/womens"} onClick={() => window.scrollTo(0, 0)}>
                <div className="children">
                  <h1>Womens</h1>
                  <p>Shop Now</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 child">
              <img
                src="assets/categorykid.png"
                alt="..."
                height={450}
                className="catimg"
              />
              <Link to={"/kids"} onClick={() => window.scrollTo(0, 0)}>
                <div className="children">
                  <h1>Kids</h1>
                  <p>Shop Now</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
