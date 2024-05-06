import "./App.css";
import Body from "./Components/Body/Body";
import Mens from "./Components/Body/Category/Mens";
import Womens from "./Components/Body/Category/Womens";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kids from "./Components/Body/Category/Kids";
import LoginSignup from "./Components/Pages/LoginSignup";
import Cart from "./Components/Pages/Cart";
import Wishlist from "./Components/Pages/Wishlist";
import Accessories from "./Components/Body/Category/Accessories";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/mens" element={<Mens category="men" />} />
          <Route exact path="/womens" element={<Womens category="women" />} />
          <Route exact path="/kids" element={<Kids category="kids" />} />
          <Route exact path="/accessories" element={<Accessories category="accessories" />} />
          <Route exact path="/product/:productID" element={<Product/>} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/wishlist" element={<Wishlist/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
