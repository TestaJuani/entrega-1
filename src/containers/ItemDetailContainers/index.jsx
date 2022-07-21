import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import {doc,getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [productDetail,setProductDetail] = useState({})
    const [error,setError] = useState("");
    const params = useParams();
    console.log(params);


  useEffect(() => {
      const getProductos = async () => {
        try {
          const docRef = doc(db,"products",params.productId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()){
            console.log("Document data:" , docSnap.data());
            if (docSnap.exists()){
              console.log("Document data:" , docSnap.data());
              const productDetail = {id: docSnap.id , ...docSnap.data()}
              setProductDetail(productDetail)}
          }else {
            console.log("No such document");
          }
          
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