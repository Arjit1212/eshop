import React from "react";
import "./Css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container contact" data-aos="fade-down">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-6">
            <img src="/assets/contact.jpg" alt="..." />
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <div className="contact-headline">
              <h1>Help Center</h1>
              <p>We are here to help you</p>
            </div>
            <div className="contact-input">
              <input type="number" placeholder="enter order-id" />
              <input type="text" placeholder="enter name" />
              <input type="number" placeholder="enter mobile number" />
              <input type="email" placeholder="enter email" />
              <input type="description" placeholder="enter your message" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
