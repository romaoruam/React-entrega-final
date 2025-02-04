import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosSnapshot = await getDocs(collection(db, "productos"));
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosList);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
