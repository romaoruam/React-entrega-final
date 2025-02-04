import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "productos");
    const q = id ? query(productosRef, where("category", "==", id)) : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(items);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {loading ? <h3>Cargando productos...</h3> : <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
