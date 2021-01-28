import React from 'react';
import './App.css';
import './utils/common.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Contacto from "./pages/Contacto/Contacto";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetalle from "./pages/PortfolioDetalle/PortfolioDetalle";
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Container from './components/Container/Container';
import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 660px)'
  })
  return (
    <BrowserRouter>
      {!isMobile && <Cursor />}
      <Nav />
      <ScrollTop></ScrollTop>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/servicios">
            <Servicios />
          </Route>
          <Route exact path="/proyectos">
            <Portfolio />
          </Route>
          <Route exact path="/proyectos/:id">
            <PortfolioDetalle />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
        </Container>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
