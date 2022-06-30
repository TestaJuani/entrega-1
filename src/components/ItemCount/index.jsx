import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ handleAdd, initial, stock }) => {
  let [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) {
      count++;
    }
    return setCount(count);
  };
  const onDecrement = () => {
    if (count > initial) {
      count--;
    }
    return setCount(count);
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
