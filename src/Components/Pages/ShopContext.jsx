import React, { createContext, useState } from "react";
import CatCollections from "../CategoryCollections";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < CatCollections.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getDefaultWishlist = () => {
  let liked = {};
  for (let index = 0; index < CatCollections.length + 1; index++) {
    liked[index] = 0;
  }
  return liked;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [likedItems, setLikedItems] = useState(getDefaultWishlist());

  const addToCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] + 1,
    }));
  };

  // const addToCart =(itemId, size, quantity) => {
  //   setCartItems((previous) => ({
  //     ...previous,
  //     [itemId]: {
  //       quantity: previous[itemId]?.quantity + quantity || quantity,
  //       size: size
  //     }
  //   }));
  // };

  const removeFromCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = CatCollections.find(
          (product) => product.id === parseInt(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const addToWishlist = (itemId) => {
    setLikedItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] + 1,
    }));
  };

  const removeFromWishlist = (itemId) => {
    setLikedItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const getTotalWishItems = () => {
    let totalWishItems = 0;
    for (const item in likedItems) {
      if (likedItems[item] > 0) {
        totalWishItems += likedItems[item];
      }
    }
    return totalWishItems;
  };
  const contextValue = {
    CatCollections,
    cartItems,
    likedItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
    addToWishlist,
    removeFromWishlist,
    getTotalWishItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
