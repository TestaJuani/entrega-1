import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/LogoB.png";
import CartWidget from "../CartWidget";
import "./styles.css";


const NavBar = () => {
    return (
        <header>
            <div className="container-logo-header">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-header"/>
                </Link>
            </div>  
            <nav className="nav"> 
                <ul>
                    <li>
                        <Link to="/" className="links">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="links">MENU</Link>
                    </li>
                    <li>
                        <Link to="/category/electronics" className="links">ELECTRONICA</Link> 
                    </li>
                    <li>
                        <Link to="/category/jewelery" className="links">JOYAS</Link>
                    </li>
                    <li>
                        <Link to="/category/women's clothing" className="links">ROPA DE MUJER</Link>
                    </li>
                    <li>
                        <Link to="/category/men's clothing" className="links">ROPA DE HOMBRE</Link>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
  export default NavBar;