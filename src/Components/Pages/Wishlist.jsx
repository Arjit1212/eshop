import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Css/Wishlist.css";
import { ShopContext } from "./ShopContext.jsx";

const Wishlist = () => {
  const { CatCollections, likedItems, removeFromWishlist,addToCart } =
    useContext(ShopContext);

  // Check if likedItems is not yet initialized
  if (!likedItems) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <>
      <div className="container wish">
        <div className="row  wishrow">
          <h2 className="wish-hr">WishList</h2>
          <hr />
          {CatCollections.map((wish) => {
            if (likedItems[wish.id] > 0) {
              return (
                <div
                  className="col-12 col-lg-3 col-md-6 wishlist"
                  key={wish.id}
                >
                  <Link
                    to={`/product/${wish.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img src={wish.image} alt={wish.image} />
                  </Link>

                  <div className="wishlist-text">
                    <p>{wish.name}</p>
                    <p className="price">${wish.price}</p>
                    <div className="wish-icons">
                      <p
                        onClick={() => {
                          removeFromWishlist(wish.id);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-share"></i>
                      </p>
                      <p onClick={() => {
                          addToCart(wish.id);
                        }}
                      >
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null; 
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
