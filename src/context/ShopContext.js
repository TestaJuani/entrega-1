import React, { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [estadoA, setEstadoA] = useState("Valor por defecto");
  const [cart, setCart] = useState([]);

  //Agrego un item al carrito
  //Evaluo si ya existe ese item en el carrito y lo sumo a la cantidad del mismo
  const addItem = (producto, cantidad) => {
    const productoRepetido = isInCart(producto);
    if (productoRepetido) {
      productoRepetido.quantity += cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...producto, quantity: cantidad }]);
    }
  };

  const isInCart = (producto) => {
    return cart.find((el) => el.id === producto.id);
  };

  //Eliminar productos del carrito
  const handleDelete = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  //Restar / Sumar cantidad a un producto del carrito
  let encontrarProducto;
  const handleAgregar = (id) => {
    encontrarProducto = cart.findIndex((el) => el.id === id);
    if (cart[encontrarProducto].quantity < cart[encontrarProducto].stock) {
      cart[encontrarProducto].quantity += 1;
      setCart([...cart]);
    } else {
      alert("No hay mas stock");
    }
  };

  const handleQuitar = (id) => {
    encontrarProducto = cart.findIndex((el) => el.id === id);
    if (cart[encontrarProducto].quantity > 0) {
      cart[encontrarProducto].quantity -= 1;
      setCart([...cart]);
    } else {
      handleDelete(id);
    }
  };

  return (
    <Shop.Provider
      value={{
        estadoA,
        setEstadoA,
        addItem,
        cart,
        handleDelete,
        handleAgregar,
        handleQuitar,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
