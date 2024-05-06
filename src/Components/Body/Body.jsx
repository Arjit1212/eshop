import React from "react";
import Slides from "./Slides/Slides.jsx";
import Category from "./Category/Category.jsx";
import Trends from "./Trends/Trends.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import AllProducts from "./AllProducts/AllProducts.jsx";
import NewsLetter from "./NewsLetter/NewsLetter.jsx";

const Body = () => {
  
  

  return (
    <>
      <Slides/>
      <Category/>
      <Trends/>
      <Testimonials/>
      <AllProducts/>
      <NewsLetter/>
    </>
  );
};

export default Body;
