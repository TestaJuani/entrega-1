import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/LogoB.png";
import CartWidget from "../CartWidget";
import "./styles.css";


const NavBar = () => {
    return (
        <header>
        <nav className="nav-header-1">
            <ul>            
                <li>
                    <Link to="/" className="links">HOME</Link>
                </li>
                <li>
                    <Link to="/category/electronics" className="links">ELECTRONICS</Link> 
                </li>
                <li>
                    <Link to="/category/jewelery" className="links">JEWELERY</Link>
                </li>
            </ul>
        </nav>
        <div className="container-logo-header">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo-header"/>
            </Link>
        </div>  
        <nav className="nav-header-2">
            <ul>
                <li>
                    <Link to="/category/women's clothing" className="links">WOMEN'S CLOTHING</Link>
                </li>
                <li>
                    <Link to="/category/men's clothing" className="links">MEN'S CLOTHING</Link>
                </li>
                <li >
                 <CartWidget/>
                </li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default NavBar;