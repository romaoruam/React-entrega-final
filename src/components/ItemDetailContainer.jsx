import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "productos", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("No existe el producto.");
        }
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Cargando...</h2>;

  if (!product) return <h2 className="text-center mt-5">Producto no encontrado</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="fw-bold">Precio: ${product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
