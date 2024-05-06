import React, { useContext } from "react";
import "./Css/Cart.css";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

const Cart = () => {
  const { CatCollections, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="container cartmain">
      <div className="row">
        <div className="col-12 cartheadline">
          <h2>E.Shop Cart</h2>
        </div>
        <div className="col-12 carthead">
          <p>
            Products <hr />
          </p>
          <p>
            Title <hr />
          </p>
          <p>
            Price <hr />
          </p>
          <p>
            Quantity <hr />
          </p>
          <p>
            Total <hr />
          </p>
          <p>
            Remove <hr />
          </p>
        </div>
        {CatCollections.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cartdata" key={e.id}>
                <Link to={`/product/${e.id}`}><img src={e.image} alt="Product" /></Link>
                <span>
                  {e.name}
                  <p>Size:{e.size}</p>
                </span>
                <p>${e.price}</p>
                <p>{cartItems[e.id]}</p>
                <p>
                  $
                  {isNaN(e.price) || isNaN(cartItems[e.id])
                    ? "N/A"
                    : e.price * cartItems[e.id]}
                </p>
                <p
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </p>
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12 cartcoupon">
          <input type="text" placeholder="Coupon code" />
          <button className="totalapply">APPLY</button>
        </div>
        <div className="col-12 col-lg-6 col-md-12 carttotal">
          <h3>Cart Totals</h3>
          <hr className="totalhr" />
          <div className="totalcart">
            <p>Cart Subtotal</p>
            <p className="right">${getTotalCartAmount()}</p>
          </div>
          <hr className="totalhr" />
          <div className="totalcart">
            <p>Shipping Charges</p>
            <p className="right">Free</p>
          </div>
          <hr className="totalhr" />
          <div className="totalcart">
            <p>Order Total</p>
            <p className="right" style={{ fontWeight: "700" }}>
              ${getTotalCartAmount()}
            </p>
          </div>
          <hr className="totalhr" />
        </div>
        <div className="col-12 totalcheckout">
          <button className="checkout">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
