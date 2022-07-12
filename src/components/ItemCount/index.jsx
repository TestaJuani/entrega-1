import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ handleAdd, stock }) => {
  let [count, setCount] = useState(1);

  const onAdd = () => {
    if (count < stock) {
      setCount(count+1);
    }
  };
  const onDecrement = () => {
    if (count > 1) {
      setCount(count-1);
    }
  };

  const handleAddCart = () =>{
    if (count <= stock) {
      handleAdd(count)
    }
    else {alert("aca")}
  }




  return (
    <div>
      <p>{count}</p>
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={handleAddCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
