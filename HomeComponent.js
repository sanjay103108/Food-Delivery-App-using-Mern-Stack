import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import Pizza from "./Images/PIZZAPIC.jpg";
import Burger from "./Images/BURGERPIC.jpg";
import Taco from "./Images/tacopic.jpg";
import Nacho from "./Images/nachopic.jpg";
import Lasagna from "./Images/lasagnapic.jpg";


function HomeComponent() {
  return (
    <div>
      <div id="react-buttons"></div>
      <script src="./build/static/js/main.js"></script>
      <section className="menu">
        <div className="nav">
          <div className="logo">
            <h1>
              Food<b>io</b>
            </h1>
          </div>
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <a href="services">Service</a>
            </li>
            <li>
              <a href="about">About US</a>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <div></div>
        </div>
      </section>
      <section className="grid">
        <div className="content">
          <div className="content-left">
            <div className="info">
              <h2>Order Your Favourite<br />Food Anytime</h2>
              <p>
                Hey, Our delicious food is waiting for you!!!<br />
                We are always near you with our fresh food{' '}
              </p>
            </div>
            <Link to="/menu" className="exploreFoodButton">Explore Food</Link>
          </div>
          <div className="content-right">
            <img src={Pizza} alt="" />
          </div>
        </div>
      </section>
      <section className="category">
        <div className="list-items">
          <h3>Popular Dishes</h3>
          <div className="card-list">
            {/* Chicken Burger Card */}
            <div className="card">
              <img src={Burger} alt="" />
              <div className="food-title">
                <h1>Chicken Burger</h1>
              </div>
              <div className="desc-food">
                <p>
                  Juicy grilled chicken patty, topped with fresh lettuce, ripe
                  tomatoes, and our special secret sauce, all served in a
                  toasted sesame bun
                </p>
              </div>
              <div className="price">
                <span>₹500.00</span>
                <span>
                  <i className="bx bxs-plus-circle"></i>
                </span>
              </div>
            </div>

            {/* Lasagna Card */}
            <div className="card">
            <img src={Lasagna} alt="" />
              <div className="food-title">
                <h1>Lasagna</h1>
              </div>
              <div className="desc-food">
                <p>
                  Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to perfection.
                </p>
              </div>
              <div className="price">
                <span>₹550.00</span>
                <span>
                  <i className="bx bxs-plus-circle"></i>
                </span>
              </div>
            </div>

            {/* Loaded Nachos Card */}
            <div className="card">
            <img src={Nacho} alt="" />
              <div className="food-title">
                <h1>Loaded Nachos</h1>
              </div>
              <div className="desc-food">
                <p>
                  Crispy tortilla chips topped with melted cheese, seasoned beef, tomatoes, and jalapeños.
                </p>
              </div>
              <div className="price">
                <span>₹450.00</span>
                <span>
                  <i className="bx bxs-plus-circle"></i>
                </span>
              </div>
            </div>

            {/* Tacos Card */}
            <div className="card">
            <img src={Taco} alt="" />
              <div className="food-title">
                <h1>Tacos</h1>
              </div>
              <div className="desc-food">
                <p>
                  Soft tortillas filled with seasoned meat, lettuce, cheese, and your favorite toppings.
                </p>
              </div>
              <div className="price">
                <span>₹400.00</span>
                <span>
                  <i className="bx bxs-plus-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeComponent;
