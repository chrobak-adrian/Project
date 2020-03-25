import React, { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Navbar from "./shared/components/Navbar/Navbar";


const App: Function = () =>
    <Router>
        <Fragment>
            <Navbar />
        </Fragment>
    </Router>;

export default App;
