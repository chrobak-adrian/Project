import React from "react";
import { Link } from "react-router-dom";

const Navbar: Function = () => {
  const links: JSX.Element = (
    <h1>
      <Link to="/contact">
        <div className="btn btn-danger">KONTAKT</div>
      </Link>
    </h1>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <div className="btn btn-danger">HABANERO</div>
        </Link>
      </h1>
      {links}
    </nav>
  );
};

export default Navbar;
