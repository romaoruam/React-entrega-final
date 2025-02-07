import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams(); // ✅ Ahora recibe el ID real
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`🔍 Buscando producto con ID: ${id}`); // 🔥 Verificar el ID en consola

    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "productos", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          console.log("✅ Producto encontrado en Firestore:", productSnap.data());
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("❌ No existe el producto en Firestore.");
        }
      } catch (error) {
        console.error("❌ Error obteniendo el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Cargando...</h2>;
  if (!product) return <h2 className="text-center mt-5 text-danger">❌ Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
