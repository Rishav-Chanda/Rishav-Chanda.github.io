import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "../node_modules/firebase/auth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/jquery/dist/jquery.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Login from "./components/pages/Login";
import SingUp from "./components/pages/SingUp";
import Navbar from "./components/Navbar";
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
                                                       
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={SingUp}  />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
