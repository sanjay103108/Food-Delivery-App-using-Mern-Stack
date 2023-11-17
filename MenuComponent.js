import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function MenuComponent() {
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
             <Link to="/menu" className="active">
             Menu
             </Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="menu-items">
        <div className="menu-item">
          <h2>Alfredo Pasta</h2>
          <p>
            Savor the rich, velvety goodness of our Alfredo Pasta—a luscious
            blend of fettuccine noodles bathed in a sumptuous Parmesan cheese
            sauce, creating an Italian classic that's pure comfort on a plate.
          </p>
          <span>₹350.00</span>
        </div>

        <div className="menu-item">
          <h2>Arabiata Pasta</h2>
          <p>
            "Get ready for a spicy kick with our Arrabbiata Pasta. Al dente penne
            smothered in a fiery tomato sauce, with a hint of garlic and chili
            flakes, for a tantalizing Italian experience.
          </p>
          <span>₹350.00</span>
        </div>

        <div className="menu-item">
          <h2>Chicken Barbeque Pizza</h2>
          <p>
            Indulge in cheesy goodness with our Chicken Pizza. A crispy, thin crust
            piled high with succulent chicken, a blend of mouthwatering cheeses,
            and your favorite toppings for a slice of pizza heaven.
          </p>
          <span>₹450.00</span>
        </div>

        <div className="menu-item">

            <h2>Lasagna</h2>
            <p>Experience layers of flavor in our Lasagna. A hearty serving of perfectly baked pasta, rich Bolognese
                sauce, and a creamy blend of cheeses, creating a comforting Italian masterpiece.</p>
            <span>₹400.00</span>
        </div>
        <div className="menu-item">

            <h2>Chicken/Veg Burger</h2>
            <p>"Satisfy your cravings with our classic Burger. Juicy grilled beef patty, crisp lettuce, fresh tomatoes,
                and a special secret sauce, all nestled in a toasted sesame bun for a taste of pure nostalgia.</p>
            <span>₹300.00</span>
        </div>
        

        <div className="menu-item">

            <h2>French Fries</h2>
            <p>Golden and crispy, our French fries are the perfect sidekick to any meal. Enjoy these perfectly seasoned,
                hand-cut delights that will leave your taste buds craving for more.</p>
            <span>₹150.00</span>
        </div>
        

        <div className="menu-item">

            <h2>Tacos</h2>
            <p>"Spice up your taste buds with our Tacos. Soft or crunchy shells filled with your choice of seasoned
                meat, fresh veggies, and zesty toppings for a Mexican fiesta in every bite.</p>
            <span>₹200.00</span>
        </div>

        <div className="menu-item">

            <h2>Loaded Nachos</h2>
            <p>Share the ultimate snack with our Loaded Nachos. A mountain of crispy tortilla chips generously topped
                with melted cheese, jalapeños, guacamole, sour cream, and your choice of savory add-ons for a
                flavor-packed fiesta.</p>
            <span>₹200.00</span>
        </div>
       
        <div className="menu-item">

            <h2>Burrito</h2>
            <p>Wrap your appetite in a Burrito delight. A warm tortilla stuffed with your favorite fillings, like tender
                meats, flavorful rice, beans, and a burst of condiments, creating a handheld meal that's both satisfying
                and portable.</p>
            <span>₹350.00</span>
        </div>

        <div className="menu-item">

            <h2>Tres leches </h2>
            <p>End your meal on a sweet note with our Tres Leches dessert. A delicate sponge cake soaked in three creamy
                milks, topped with whipped cream and a drizzle of caramel—pure indulgence in every bite.</p>
            <span>₹250.00</span>
        </div>

        <div className="menu-item">
          <h2>Chocolate/Coffee Milkshake</h2>
          <p>
            Quench your thirst with our luscious Milkshakes. Creamy, cool, and
            available in a variety of flavors, these shakes are a perfect
            accompaniment to your meal or a sweet treat on their own.
          </p>
          <span>₹150.00</span>
        </div>

        <div className="menu-item">
          <h2>Death By Chocolate</h2>
          <p>
            A sinfully rich dessert featuring layers of decadent dark chocolate
            cake, velvety mousse, and a glossy ganache finish – a chocolate
            lover's dream come true.
          </p>
          <span>₹150.00</span>
        </div>
      </section>
    </div>
  );
}

export default MenuComponent;
