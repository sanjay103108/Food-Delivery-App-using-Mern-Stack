// SigninComponent.js
import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SigninComponent = ({ signIn, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    signIn(username, password);
  };

  // Redirect to home if already authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
      <section className="signin">
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
              <Link to="/signin" className="active">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="signin-container">
        <h2 className="signin-title">Sign IN</h2>
        <form className="signin-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signin-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
          />
          <button type="button" onClick={handleSignin} className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninComponent;
