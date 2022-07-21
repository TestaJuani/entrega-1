import React, { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import {collection,query,getDocs} from "firebase/firestore";
import { db } from "../../firebase/config";
import "./styles.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()


  useEffect(() => {

    const getProductos = async () => {
      try {
        const q =query(collection(db,"products"));
        const querySnapshot = await getDocs (q);
        const productos= [];
        querySnapshot.forEach ((doc)=>{
          productos.push({id: doc.id, ...doc.data()});
        });
        setProductos(productos);
        setProductosFiltrados(productos)
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <p>Loading...</p>
      }
    </div>
  );
};

export default ItemListContainer;


