// EXTERNAL
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bulma";
// COMPONENTS
import Homepage from "./components/Homepage";
// import About from "./components/About";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";

import navLogo from "./assets/Outlaw718-logo.png";

function App() {
  return (
    <BrowserRouter>
      <main>
        <nav className="navbar is-spaced is-fixed-top">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={navLogo} alt="logo" height="100" />
            </Link>
          </div>
          {/* </div> */}

          {/* <div className="navbar-menu"> */}
          <div className="navbar-end">
            <Link className="navbar-item" to="/About">
              About
            </Link>
            <Link className="navbar-item" to="/Gallery">
              Gallery
            </Link>
            <Link className="navbar-item" to="/contact">
              Get in touch
            </Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/gallery" component={Gallery} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
