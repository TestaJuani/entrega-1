import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail] = useState({})
    const [error,setError] = useState("");
    const params = useParams();
    console.log(params);


  useEffect(() => {
      const getProductos = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
          const data = await response.json();
          setProductDetail(data);
        } catch (error) {
          setError(error.message);
        }
      }
  
      getProductos()
  }, [params]);


  return (
    <ItemDetail product={productDetail}/>
  );
};

export default ItemDetailContainer;