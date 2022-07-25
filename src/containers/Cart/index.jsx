import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ordenGenerada from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';

const Cart = () => {

  const navigate = useNavigate();
  const {cart,handleDelete,handleAgregar,handleQuitar} = useContext(Shop) ;
  
  const confirmarOrden = async () => {
    console.log("Aca");
    const orden = ordenGenerada("Juan", "Av.Santa Fe", cart, 1240);
    guardarOrden(cart, orden)

    

  // Add a new document in collection "cities"
  const docRef = await addDoc(collection(db, "orders"), orden)
    console.log("Document written with ID: ",docRef.id);
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
          <div>
          <button onClick={()=>handleAgregar(producto.id)}>Agregar</button>
          <p>cantidad:{producto.quantity}</p>
          <button onClick={()=>{handleQuitar(producto.id)}}>Quitar</button>
          </div>
          <button onClick={()=>handleDelete(producto.id)}>DELETE</button>
          <button onClick={confirmarOrden}>Confirmar compra</button>
          </div>
        
      }):<>
      <p>Tu carrito esta vacio</p>
      <button onClick={irAlCatalogo}>Ir al catalogo </button>
      </>}
    </div>
  )
};

export default Cart;
