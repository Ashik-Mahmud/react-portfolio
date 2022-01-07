import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import "./index.css";
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./Error";

export default function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route  component={Error} />
       <Redirect  to="/error" />
    </Switch>
    <Footer />
    </>
  )
}
