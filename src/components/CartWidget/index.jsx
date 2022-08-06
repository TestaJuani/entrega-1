import React from "react";
import { useContext } from "react";
import {HiShoppingCart} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import "./style.css"

const CartWidget = () => {
    const {cart} = useContext(Shop);
    const navigate = useNavigate();

    let cantidadCarrito = 0;
    if(cart.length !== 0 ){
        for (const el of cart) {
            cantidadCarrito +=  el.quantity;
        }
    }
    const irAlCarrito = () => {
        navigate('/cart')
    }
    return (
        <div>
            <HiShoppingCart onClick={irAlCarrito} className="icono-carrito"/>
            <span>{cantidadCarrito}</span>
        </div>
    )
}

export default CartWidget;