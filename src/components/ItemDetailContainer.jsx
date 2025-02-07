import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`🔍 Buscando producto con ID: ${id}`); // ✅ Debugging

        const productRef = doc(db, "productos", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
          console.log("✅ Producto encontrado:", productSnap.data()); // ✅ Debugging
        } else {
          console.error("❌ No existe el producto en Firestore.");
        }
      } catch (error) {
        console.error("⚠️ Error obteniendo el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Cargando...</h2>;
  if (!product) return <h2 className="text-center mt-5">Producto no encontrado</h2>;

  return (
    <div className="container-fluid">
      <div className="section-container">
        <ItemDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
