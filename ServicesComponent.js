import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './styles.css'; // Import your CSS file

function ServicesComponent() {
  return (
    <div>
      <section className="menu">
        <div className="nav">
          <div className="logo">
            <h1>
              Food<b>io</b>
            </h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/services" className="active">
                Service
              </Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="services">
        <h2>Our Services </h2>
        <div className="services-item">
          <h3>Online Food Ordering</h3>
          <p>
            Order your favorite dishes from a wide variety of restaurants and
            cuisines through our user-friendly platform.
          </p>
          
        </div>
        <div className="services-item">
          <h3>Delivery & Takeout</h3>
          <p>
            We offer fast and reliable delivery services, and if you prefer,
            you can opt for convenient takeout options as well.
          </p>
        </div>

        <div className="services-item">
          <h3>Easy Payment</h3>
          <p>
            Enjoy hassle-free payments with various options, including credit
            cards, digital wallets, and cash on delivery.
          </p>
        </div>

        <div className="services-item">
          <h3>Diverse Cuisines</h3>
          <p>
            Explore a world of flavors with a diverse range of cuisines, from
            Italian to Mexican and everything in between.
          </p>
        </div>

        <div className="services-item">
          <h3>Special Features</h3>
          <p>
            Discover our special features, such as dietary options, family meal
            deals, and catering services for your events.
          </p>
        </div>

        <div className="services-item">
          <h3>Customer Support</h3>
          <p>
            Our customer support team is available to assist you with any
            questions or issues. Contact us 24/7.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServicesComponent;
