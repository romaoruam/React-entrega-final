import { db } from "./firebaseConfig.js"; // Asegúrate de la ruta
import { collection, addDoc } from "firebase/firestore";
import products from "./mockProducts.js";

const uploadProducts = async () => {
  console.log("🚀 Iniciando carga de productos en Firebase...");

  try {
    const productsCollection = collection(db, "products"); // Cambia "products" por el nombre que prefieras

    for (const product of products) {
      const docRef = await addDoc(productsCollection, product);
      console.log(`✅ Producto agregado: ${product.name} (ID: ${docRef.id})`);
    }

    console.log("🔥 TODOS LOS PRODUCTOS SE HAN SUBIDO A FIREBASE");
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
  }
};

uploadProducts();
