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

        if (id) {
          productsRef = query(productsRef, where("category", "==", id));
        }

        const snapshot = await getDocs(productsRef);
        const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setProducts(productList);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="section-container">
        <h2 className="text-center">{greeting}</h2>
        {loading ? <h2 className="text-center mt-5">Cargando productos...</h2> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
