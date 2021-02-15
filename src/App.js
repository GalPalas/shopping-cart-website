import React, { Component } from "react";
import Products from "./components/products";
import Filter from "./components/filter";
import Cart from "./components/cart";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>All rights reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
