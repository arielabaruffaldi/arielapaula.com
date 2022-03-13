import React, { createContext } from "react";
import "./App.css";
import "./utils/common.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Contacto from "./pages/Contacto/Contacto";
import Portfolio from "./pages/Portfolio/Portfolio";
import Error from "./pages/Error/Error";
import PortfolioDetalle from "./pages/PortfolioDetalle/PortfolioDetalle";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Container from "./components/Container/Container";
import { useMediaQuery } from "react-responsive";
import { LoaderProvider } from "./context/GeneralContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 660px)",
  });

  return (
    <LoaderProvider initial={true}>
      <BrowserRouter>
        {!isMobile && <Cursor />}
        <Nav />
        <ScrollTop></ScrollTop>
        <Container>
          <Switch>
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
            <Route>
              <Error />
            </Route>
          </Switch>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </LoaderProvider>

  );
}

export default App;
