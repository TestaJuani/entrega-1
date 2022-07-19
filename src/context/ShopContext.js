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

  return (
    <Shop.Provider value={{ estadoA, setEstadoA, addItem, cart }}>
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
