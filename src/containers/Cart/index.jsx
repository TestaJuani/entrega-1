import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";

const Cart = () => {

  const navigate = useNavigate();
  const {cart} = useContext(Shop) ;
  const handleDelete = (id) => {
    cart.filter(el => el.id !== id)
  }
  const irAlCatalogo = () =>{
    navigate('/')
  }
  return (
    <div>
      {(cart.length !== 0)?
      cart.map(producto => {
        return <div key={producto.id}>
          <h4>{producto.title}</h4>
          <img src={producto.image} alt={producto.title} width="100" height="100"/>
          <p>cantidad:{producto.quantity}</p>
          <button onClick={handleDelete(producto.id)}>DELETE</button>
          </div>
        
      }):<>
      <p>Tu carrito esta vacio</p>
      <button onClick={irAlCatalogo}>Ir al catalogo </button>
      </>}
    </div>
  )
};

export default Cart;
