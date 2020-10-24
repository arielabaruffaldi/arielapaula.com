import React from 'react';
import './App.css';
import './utils/common.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Contacto from "./pages/Contacto/Contacto";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Cursor></Cursor>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/servicios">
          <Servicios />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
