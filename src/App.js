import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ul className="navbar">
          <li>Home</li>
          <li>Products</li>
          <li>Info</li>
        </ul>
        <h1 className="title">Farmacia React</h1>
        <div className="components">
          <Info />
          <Home />
          <Products />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
