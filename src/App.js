import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bulma";

import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
// import About from "./components/About";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import navLogo from "./assets/Outlaw718-logo.png";

function App() {
  return (
    <BrowserRouter>
      <main>
        <nav className="navbar is-white is-spaced is-transparent">
          <div className="navbar-brand">
            <Link className="navbar-item navbar-brand-item" to="/">
              <img src={navLogo} alt="logo" />
              {/* OUTLAW718 */}
            </Link>
          </div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/About">
              ABOUT
            </Link>
            <Link className="navbar-item" to="/Gallery">
              GALLERY
            </Link>
            <Link className="navbar-item" to="/contact">
              GET IN TOUCH
            </Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/gallery" component={Gallery} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
