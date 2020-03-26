import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Contact from "../Contact/Contact";

const Routes: React.FC = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </section>
  );
};

export default Routes;
