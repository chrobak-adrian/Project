import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Zamów Habanero albo Queske</h1>
        <div className="buttons-wrapper">
          <Link to="/" className="btn btn-danger">
            Menu
          </Link>
          <Link to="/" className="btn btn-light">
            Zamów
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
