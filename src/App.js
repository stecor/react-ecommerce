import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div id="header">
            <div id="subheader">
              <div className="container">
                <p>faster online shop</p>
                <a href="guest.js">Guest</a>
                <a href="consumer.js">Consumer</a>
                <a href="download.js">Download App</a>
                <a href="help.js">Help</a>
              </div>
            </div>
          </div>
          {/* main header */}
          <div id="main-header">
            {/* logo */}
            <div className="logo">
              <span id="ist">MY</span><span id="iist">Shop.com</span>
            </div>
            {/* search */}
            <div id="search">
              <form action="">
                <input className="search-area" type="text" name="search" placeholder="Search"/>
                <input className="search-btn" type="submit" name="submit" value="Search"/>
              </form>
            </div>
            {/* user menu */}
            <div id="user-menu">
              <li><a href="cart.js">Cart</a></li>
              <li><a href="login.js">Login</a></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
