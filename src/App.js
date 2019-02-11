import React, { Component } from 'react';
import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app-container">        
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
