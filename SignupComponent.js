// SignupComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SignupComponent = ({ signUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    signUp(username, password);
  };

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
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup" className="active">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="signup-container">
        <h2 className="signup-title">Sign UP</h2>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="button" onClick={handleSignup} className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
