import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Common/Header";
import HomePage from "./container/HomePage";
import Footer from "./component/Common/Footer";
import ShopPage from "./container/ShopPage";
import ProductDetailPage from "./container/ProductDetailPage";
import CartPage from "./container/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/ShopPage" component={ShopPage} />
          <Route path="/products/:productId" component={ProductDetailPage} />
          <Route path="/Cart" component={CartPage} />
          {/* <Route path="/Contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
