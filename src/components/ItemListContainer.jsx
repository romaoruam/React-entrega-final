import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsRef = collection(db, "productos");
        let q = id ? query(productsRef, where("category", "==", id)) : productsRef;

        const snapshot = await getDocs(q);
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id, // 🔥 Usamos el ID real de Firestore
          ...doc.data(),
        }));

        console.log("📌 Productos obtenidos:", productList); // 🔥 Log para ver los ID correctos
        setProducts(productList);
      } catch (error) {
        console.error("❌ Error obteniendo los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">{greeting}</h2>
      {loading ? <h2 className="text-center mt-5">Cargando productos...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
