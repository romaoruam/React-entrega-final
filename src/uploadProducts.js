import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import products from "./mockProducts.js"; // Asegúrate de que existe este archivo

async function uploadProducts() {
  const productsCollection = collection(db, "productos");

  for (const product of products) {
    await addDoc(productsCollection, product);
    console.log(`Producto agregado: ${product.name}`);
  }

  console.log("✅ Todos los productos han sido subidos a Firebase.");
}

// Ejecutar la función
uploadProducts().catch(console.error);
