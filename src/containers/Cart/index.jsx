import React,{ useContext } from "react";
import CheckOut from '../../components/CheckOut';
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import "./styles.css"


const Cart = () => {

  const navigate = useNavigate();
  const {cart,handleDelete,handleAgregar,handleQuitar} = useContext(Shop) ;

  const irAlCatalogo = () =>{
    navigate('/menu')
  }
  return (
    <div className="contenedor-cart">
      <div className="contenedor-card-cart">
        <h2 className="titulo-contenedor-card-cart">RESUMEN</h2>
      {(cart.length !== 0)?
      cart.map(producto => {
        return  <div key={producto.id} className="card-cart">
                  <h4 className="titulo-card-cart">{producto.title}</h4>
                  <img src={producto.image} alt={producto.title} className="img-card-cart"/>
                  <p className="precio-card-cart">Precio: {producto.price.toFixed(2)}</p>
                  <div className="contenedor-add-dec-card-cart">
                    <button className="boton-dec-card-cart" onClick={()=>{handleQuitar(producto.id)}}>Quitar</button>
                    <p className="cantidad-card-cart">cantidad:{producto.quantity}</p>
                    <button className="boton-add-card-cart" onClick={()=>handleAgregar(producto.id)}>Agregar</button>
                    <button className="boton-delete-cart" onClick={()=>handleDelete(producto.id)}>DELETE</button>
                  </div>             
                </div>
      }):  
      <button onClick={irAlCatalogo}>Ir al catalogo </button>}
      </div>
      {(cart.length !== 0)?
      <CheckOut/>
      :<p>Tu carrito esta vacio</p>}
    </div>
  )
};

export default Cart;
