import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const algoritmoGuardadoAutomático = async () => {
  const response = await fetch("/mocks/data.json");
  const productosAGuardar = await response.json();

  productosAGuardar.forEach(async (producto) => {
    const docRef = await addDoc(collection(db, "products"), {
      title: producto.title,
      price: producto.price,
      description: producto.description,
      category: producto.category,
      image: producto.image,
      stock: 10,
    });
    console.log("Document written with ID: ", docRef.id);
  });
};

export default algoritmoGuardadoAutomático;
