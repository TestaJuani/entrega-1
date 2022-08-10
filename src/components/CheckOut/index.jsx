import React,{ useContext} from "react";
import { Shop } from "../../context/ShopContext";
import generarOrden from '../../utils/generarOrden';
import guardarOrden from '../../utils/guardarOrden';
import "./styles.css"





const CheckOut = () =>{
    let {cart,setCart} = useContext(Shop);
    

    const calcularValorTotal = cart.reduce((acumulador,elemento) => acumulador + elemento.price,0);
    let cantidadCarrito = 0;
    if(cart.length !== 0 ){
        for (const el of cart) {
            cantidadCarrito +=  el.quantity;
        }
    }
    const confirmarOrden = async (e) => {
        e.preventDefault();
        let miFormulario = e.target;
        let nombre = miFormulario.children[0].children[1].value;
        let apellido = miFormulario.children[1].children[1].value;
        let direccion = miFormulario.children[2].children[1].value;
        let telefono = miFormulario.children[3].children[1].value;

        const orden = generarOrden(nombre,apellido, direccion,telefono, cart, calcularValorTotal);
        guardarOrden(cart, orden);
        cart = [];
        setCart(cart)
        
    
    }


    return (
        <div className="contenedor-formulario-cart">
            <h2 className="titulo-contenedor-formulario-cart">FINALIZAR COMPRA</h2>
            <form className="formulario" onSubmit={confirmarOrden}>
                <div className="container-label-input">
                    <label htmlFor="nombre">Nombre del pedido</label>
                    <input type="text" name="nombre" required/>
                </div>
                <div className="container-label-input">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" required/>
                </div>
                <div className="container-label-input">
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" name="direccion" required/>
                </div>
                <div className="container-label-input">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" name="telefono" required/>
                </div>
                <p>Productos en tu carrito: {cantidadCarrito}</p>
                <p>Valor total de la compra: ${calcularValorTotal.toFixed(2)}</p>               
                <div className="container-label-input">
                     <input type="submit" value="Realizar compra"/>
                </div>
            </form>
      </div>
    )
}

export default CheckOut;
