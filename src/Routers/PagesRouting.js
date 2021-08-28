import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import UploadNew from "../Pages/UploadNew";
import "./PagesRouting.css";
const PagesRouting = () => {
  return (
    <Router>
      <div>
        <header class="site-header">
          <div class="site-identity">
            <h1>
              <a href="#">Codingada</a>
            </h1>
          </div>
          <nav class="site-navigation">
            <ul class="nav">
              <li>
                <Link to="/">Welcome</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <a href="#">Setting</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/upload">
            <UploadNew />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default PagesRouting;
