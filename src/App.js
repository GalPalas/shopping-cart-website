import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Products from "./components/products";
import Filter from "./components/filter";
import Cart from "./components/cart";
import store from "./store";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
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
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
