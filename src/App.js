import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

    <nav className="navbar">
      <a href="#" className="logo">Pizza Express</a>
      <ul className="nav-links">
        <li><a href="#">Menu</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>

    <div className="container">
      <h1 className="title">Welcome to Pizza Palace</h1>
      <p className="description">The best place to order delicious pizza online!</p>
      <div className="pizza-options">
        <div className="pizza-option">
          <h2 className="option-title">Margherita</h2>
          <p className="option-description">Tomato sauce, mozzarella cheese, and fresh basil.</p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="pizza-option">
          <h2 className="option-title">Pepperoni</h2>
          <p className="option-description">Tomato sauce, mozzarella cheese, pepperoni, and red pepper flakes.</p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="pizza-option">
          <h2 className="option-title">Vegetarian</h2>
          <p className="option-description">Tomato sauce, mozzarella cheese, bell peppers, onions, mushrooms, and olives.</p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
      </div>

    );
  }
}

export default App;
