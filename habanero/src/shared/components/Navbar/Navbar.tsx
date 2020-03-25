import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar: Function = () => {
    const links = (
        <ul>
            <li>
                <Link to="/profiles">MENU</Link>
            </li>
        </ul>
    );
    return (
        <nav className="navbar bg-dark">
            <Fragment>
                <div>
                    <h1>HABANERO</h1>
                </div>
                <div>{links}</div>
            </Fragment>
        </nav>
    );
}
export default Navbar;
