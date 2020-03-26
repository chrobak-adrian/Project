import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <div className="landing-welcome bg-dark">
          <h1 className="x-large">Witamy w Habanero</h1>
        </div>

        <div className="buttons-wrapper">
          <Link to="/menu" className="btn btn-danger">
            Menu
          </Link>
          <Link to="/order" className="btn btn-light">
            Zamów
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
