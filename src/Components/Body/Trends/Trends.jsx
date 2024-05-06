import React, { useContext,useState } from "react";
import "../Trends/Trends.css";
import trendyProducts from "../Trends/TrendCollection.jsx";
import { Link  } from "react-router-dom";
import { ShopContext } from "../../Pages/ShopContext.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({offset:120});
const Trends = () => {
  const {addToWishlist,likedItems} = useContext(ShopContext);
  const [trend] = useState(trendyProducts);

  return (
    <>
      <section id="trends" className="trends-section-padding">
        <div className="container cont">
          <div className="row cont1row">
            <div className="col-12 trend-title">
              <h6>Hot Items of this year</h6>
              <h2>TRENDY PRODUCTS</h2>
            </div>
          </div>
          <div className="row cont2row" data-aos="fade-up">
            {trend.map((prod) => {
              const { image, category, name, price } = prod;
              return (
                <div className="col-lg-3 col-md-6 col-12 trend">
                  <img src={image} alt={image} />
                  <div className="overlay-trend">
                    <span onClick={()=>{addToWishlist(prod.id); alert('Added to Wishlist');}}>
                      <i className={`fa-solid fa-heart ${likedItems[prod.id] ? 'colorred' : ''}`}
                         id="wishlist"
                          ></i>
                    </span>
                    <span>{category}</span>
                    <h4>{name}</h4>
                    <span>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span>${price}</span>
                    <Link
                      to={`/product/${prod.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <button>QUICKVIEW</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trends;
