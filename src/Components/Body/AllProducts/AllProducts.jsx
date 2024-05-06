import React, { useState } from "react";
import "../AllProducts/AllProducts.css";
import SpecialOffers from "../AllProducts/SpecialOffers.jsx";
import Accesories from "../AllProducts/Accesories.jsx";
import TopRated from "../AllProducts/TopRated.jsx";
import BestSellers from "../AllProducts/BestSellers.jsx";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({offset:120});

const AllProducts = () => {
  const [special] = useState(SpecialOffers);
  const [best] = useState(BestSellers);
  const [acc] = useState(Accesories);
  const [top] = useState(TopRated);

  return (
    <>
      <div className="container all"  data-aos="zoom-in">
        <div className="row allrow">
          
            <h3>Special Offers</h3>
          
          <hr className="custom-hr"></hr>
          {special.map((off) => {

            return (
              <>
                <Link
                  to={`/product/${off.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="col-12 col-lg-3 col-md-6 allprod"
                    key={off.id} 
                  >
                    <img src={off.image} alt={off.image} />
                    <div className="allprod-text">
                      <p>{off.name}</p>
                      <span>
                        {off.price}
                        <p id="price">${off.offerprice}</p>
                      </span>
                    </div>
                  </div>
                </Link>
                <hr className="customi-hr"></hr>
              </>
            );
          })}
        </div>

        <div className="row  allrow">
          <h3>Best Sellers</h3>
          <hr className="custom-hr"></hr>
          {best.map((sell) => {
            const { image, price, name } = sell;
            return (
              <>
                <Link
                  to={`/product/${sell.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="col-12 col-lg-3 col-md-6 allprod"
                    key={sell.id}
                  >
                    <img src={image} alt={image} />
                    <div className="allprod-text">
                      <p>{name}</p>
                      <p className="price">${price}</p>
                    </div>
                  </div>
                </Link>
                <hr className="customi-hr"></hr>
              </>
            );
          })}
        </div>

        <div className="row allrow">
          <h3>Accessories</h3>
          <hr className="custom-hr"></hr>
          {acc.map((access) => {
            const { image, price, name } = access;
            return (
              <>
                <Link
                  to={`/product/${access.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="col-12 col-lg-3 col-md-6 allprod"
                    key={access.id}
                  >
                    <img src={image} alt={image} />
                    <div className="allprod-text">
                      <p>{name}</p>
                      <p className="price">${price}</p>
                    </div>
                  </div>
                </Link>
                <hr className="customi-hr"></hr>
              </>
            );
          })}
        </div>
        <div className="row allrow">
          <h3>Top Rated</h3>
          <hr className="custom-hr" />
          {top.map((rate) => {
            const { image, price, name } = rate;
            return (
              <>
                <Link
                  to={`/product/${rate.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="col-12 col-lg-3 col-md-6 allprod"
                    key={rate.id}
                  >
                    <img src={image} alt={image} />
                    <div className="allprod-text">
                      <p>{name}</p>
                      <p className="price">${price}</p>
                    </div>
                  </div>
                </Link>
                <hr className="customi-hr" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
