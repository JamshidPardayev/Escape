import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="footer">
        <h2>Stay in Touch</h2>
        <p></p>
        <form action="">
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Submit</button>
        </form>
      </div>
      <div className="footerNav">
        <div className="footerNavSection">
          <h1>Escape</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
