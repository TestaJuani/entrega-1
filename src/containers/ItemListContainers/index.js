import React from "react";
import ItemCount from "../../components/ItemCount";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const handleAdd = () => {
    console.log("Se agrego al carrito");
  };
  return (
    <div>
      <p>{greeting}</p>
      <ItemCount handleAdd={handleAdd} initial={1} stock={4} />
    </div>
  );
};

export default ItemListContainer;
