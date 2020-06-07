import React from 'react';
import {Link, useHistory} from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={`/dishes/`} className="navbar-brand">WEEKLY MENU</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={`/dishes/`} className="nav-link">Food Items<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to={`/dishes/`} className="nav-link">Dishes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;