import React from 'react';
import './App.css';
//Pages
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import OneProductPage from "./pages/OneProductPage";
import Default from "./pages/Default";

//ROUTING
import { Switch, Route } from "react-router-dom";
//NAV
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";


export default class App extends React.Component {
  render() {
    return <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route exact path="/contact" render={() => <ContactPage />} />
        <Route exact path="/products" render={() => <ProductsPage />} />
        <Route exact path="/product/:id" render={() => <OneProductPage />} />
        <Route exact path="/cart" render={() => <CartPage />} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  }
}
