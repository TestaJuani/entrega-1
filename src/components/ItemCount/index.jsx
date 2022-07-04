import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ handleAdd, initial, stock }) => {
  let [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) {
      setCount(count+1);
    }
  };
  const onDecrement = () => {
    if (count > initial) {
      setCount(count-1);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
