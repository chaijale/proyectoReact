import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cartwidget";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/738/520/themes/common/logo-1673939855-1623708243-452265957599dcd8c9c6d76ac2af422d1623708243.jpg?0"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/iluminacion"
                className="nav-link active"
                aria-current="page"
              >
                ILUMINACION
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/libreria"
                className="nav-link active"
                aria-current="page"
              >
                LIBRERIA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/cocina"
                className="nav-link active"
                aria-current="page"
              >
                COCINA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/bano"
                className="nav-link active"
                aria-current="page"
              >
                HIGIENE
              </Link>
            </li>
            <li className="nav-item widget-container">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
