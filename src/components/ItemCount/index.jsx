import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ handleAdd, stock,precio }) => {
  let [count, setCount] = useState(1);
  let [calcPrecio,setCalcPrecio] = useState(precio)
  const onAdd = () => {
    if (count < stock) {
      setCount(count+1);
      setCalcPrecio(calcPrecio+=precio)
    }
  };
  const onDecrement = () => {
    if (count > 1) {
      setCount(count-1);
      setCalcPrecio(calcPrecio-=precio)
    }
  };

  const handleAddCart = () =>{
    if (count <= stock) {
      handleAdd(count,calcPrecio)
    }
  }

  return (
    <div className="container-count">
      <p>${calcPrecio.toFixed(2)}</p>
      <div className="container-cantidad-count">
        <button onClick={onAdd} className="button-add-dec">+</button>
        <p>{count}</p>
        <button onClick={onDecrement} className="button-add-dec">-</button>
      </div>
      <button onClick={handleAddCart} className="button-agregar-carrito">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
