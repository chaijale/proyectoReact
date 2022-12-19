import React from "react";
import CartWidget from "../Cartwidget";
import './style.css'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/738/520/themes/common/logo-1673939855-1623708243-452265957599dcd8c9c6d76ac2af422d1623708243.jpg?0" alt="logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">CONTACTO</a>
                        </li>
                        <li className="nav-item widget-container">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}