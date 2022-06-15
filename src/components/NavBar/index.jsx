import React from "react";
import logo from "../../logo.svg";
import "./styles.css";


const NavBar = () => {
    return (
        <header>
        <nav className="nav-header-1">
            <ul>            
                <li>
                    <a href="#inicio" className="links">INICIO</a>
                </li>
                <li>
                    <a href="#menu" className="links">MENU</a> 
                </li>
                <li>
                    <a href="#contacto" className="links">CONTACTO</a>
                </li>
            </ul>
        </nav>
        <div className="container-logo-header">
            <a href="#logo">
                <img src={logo} alt="Logo" className="logo-header"/>
            </a>
        </div>  
        <nav class="nav-header-2">
            <ul>
                <li>
                    <a href="#nosotros" className="links">NOSOTROS</a>
                </li>
                <li>
                    <a href="#galeria" className="links">GALERIA</a>
                </li>
                <li >
                  <a href="#carrito" className="links">CARRITO
                  </a>
                </li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default NavBar;