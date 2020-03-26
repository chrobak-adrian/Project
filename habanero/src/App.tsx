import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/components/Navbar/Navbar";
import Landing from "./shared/components/Landing/Landing";

const App: Function = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route component={Routes} /> */}
      </Switch>
    </Fragment>
  </Router>
);

export default App;
