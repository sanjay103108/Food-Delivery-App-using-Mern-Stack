import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './styles.css'; 

function AboutUsComponent() {
  return (
    <div>
      <section className="menu">
        <div className="nav">
          <div className="logo">
            <h1>Food<b>io</b></h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about" className="active">About Us</Link></li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Welcome to Foodio, your one-stop destination for delightful culinary experiences. We're passionate about bringing you the best in food delivery and ensuring a seamless, satisfying journey every time you order with us.</p>
        <br />
        <h3>Our Mission</h3>
        <p>Our mission is to provide convenient and delectable dining experiences for our customers. We strive to connect food lovers with a diverse range of cuisines, ensuring they enjoy delicious meals from the comfort of their own homes.</p>
        <br />
        <h3>Our Team</h3>
        <p>At Foodio, our dedicated team works tirelessly to make your food ordering and delivery experience exceptional. From our chefs who craft mouthwatering dishes to our customer support team that's here to assist you, we're committed to your satisfaction.</p>
        <br />
        <h3>Quality Assurance</h3>
        <p>We prioritize quality and safety in every step of our service. From partnering with trusted restaurants to implementing stringent hygiene standards, we ensure that the food you receive is not only delicious but also safe to enjoy.</p>
        <br />
        <h3>Community Engagement</h3>
        <p>We value our community and take pride in being a part of it. We actively engage with our customers and seek to give back through various initiatives, promotions, and partnerships that enrich the lives of our users.</p>
        <br />
        <h3>Contact Us</h3>
        <p>If you have any questions or feedback, we'd love to hear from you. Contact us through our customer support channels, and we'll be more than happy to assist you.</p>
        <p>Email- foodio_foods@gmail.com</p>
        <p>Contact number - 1234567898</p>
        <p>Instagram - Foodio_Foods</p>
      </section>
    </div>
  );
}

export default AboutUsComponent;
