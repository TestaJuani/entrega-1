import React from "react";
import { useContext } from "react";
import {HiShoppingCart} from "react-icons/hi";
import { Shop } from "../../context/ShopContext";

const CartWidget = () => {
    const {cart} = useContext(Shop);
    let cantidadCarrito = 0;
    if(cart.length !== 0 ){
        for (const el of cart) {
            cantidadCarrito +=  el.quantity;
        }
    }
    return (
        <div>
        {cart.length !== 0 &&
        <>
            <HiShoppingCart/>
        <span>{cantidadCarrito}</span>
        </>
        }
        </div>
    )
}

export default CartWidget;