import React, { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState(null)

  useEffect(() => {
    const imprimeMensaje = () => {
      const getProductos = async () => {
        try {
          const response = await fetch('/mocks/data.json');
          const data = await response.json();
          console.log(data);
          setProductos(data);
        } catch (error) {
          console.log("Hubo un error:");
          console.log(error);
        }
      }
  
      getProductos()
  }
  
  setTimeout(imprimeMensaje, 2000)
   

  }, [])

  console.log(productos);


  const handleAdd = () => {
    console.log("Se agrego al carrito");
  };
  return (
    <div>
      <p>{greeting}</p>
      <ItemCount handleAdd={handleAdd} initial={1} stock={4} />
      {productos ?
        <ItemList products={productos} />
        :
        null
      }
    </div>
  );
};

export default ItemListContainer;


