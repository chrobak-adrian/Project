import React from "react";
import { Link } from "react-router-dom";

const Navbar: Function = () => {
  const links: JSX.Element = (
    <Link to="/contact">
      <div className="btn btn-danger">KONTAKT</div>
    </Link>
  );

  return (
    <nav className="navbar bg-dark">
      <Link to="/">
        <div className="btn btn-danger">HABANERO</div>
      </Link>
      {links}
    </nav>
  );
};

export default Navbar;
