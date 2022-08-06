import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"


const Home = () => {


  
  return (
    <div>
        <div className="banner">
            <div className="banner-div1"></div>
            <div className="banner-div2"></div>
            <div className="banner-div3"></div>
        </div>
        <div className="section-one">
            <h1>Joyas</h1>
            <div className="contiene-img-parrafo">
                <div className="contiene-img1">
                </div>
                <div className="contiene-parrafo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente corporis ex aliquid explicabo a, ullam odio quaerat eveniet at beatae. Quia sint sed, possimus ad debitis consequuntur commodi at. Aut?</p>
                    <Link to="/category/jewelery" className="links-home">VER MAS</Link>
                </div>
            </div>
        </div>
        <div className="section-two">
            <h2>PARA QUIEN COMPRAS?</h2>
            <div className="contiene-dos-img">
                <div className="div-1">
                    <Link to="/category/women's clothing" className="links-home">MUJER</Link>
                </div>
                <div className="div-2">
                    <Link to="category/men's clothing" className="links-home">HOMBRE</Link>
                </div>
            </div>
        </div>
        <div className="section-tree">
            <h2>Electronica</h2>
            <div className="contiene-img-parrafo">
                <div className="contiene-parrafo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam velit atque earum optio fugit id nobis doloribus reiciendis. Iste cum consequatur, eveniet debitis asperiores dignissimos et dolor nulla? Quibusdam.</p>
                    <Link to="/category/electronics" className="links-home">VER MAS</Link>
                </div>
            <div className="contiene-img2"></div>
            </div>
        </div>
    </div>
  )
};

export default Home;