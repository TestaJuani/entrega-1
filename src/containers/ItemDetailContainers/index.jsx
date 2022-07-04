import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail] = useState({})
    const [error,setError] = useState("");

  useEffect(() => {
    const imprimeMensaje = () => {
      const getProductos = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products/1');
          const data = await response.json();
          setProductDetail(data);
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      }
  
      getProductos()
  }
  
  setTimeout(imprimeMensaje, 2000)
   

  }, [])
  return (
    <ItemDetail product={productDetail}/>
  );
};

export default ItemDetailContainer;