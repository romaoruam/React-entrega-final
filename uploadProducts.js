import { db } from "./src/firebaseConfig.js"; // 🔥 Ruta corregida
import { collection, addDoc } from "firebase/firestore";
import products from "./src/mockProducts.js"; // 🔥 Asegurate de que `mockProducts.js` también esté en `src/`

async function uploadProducts() {
  const productsCollection = collection(db, "productos");

  for (const product of products) {
    const { id, ...productWithoutId } = product; 
    const docRef = await addDoc(productsCollection, productWithoutId);
    
    console.log(`✅ Producto agregado: ${product.name} con ID: ${docRef.id}`);
  }

  console.log("✅ Todos los productos han sido subidos a Firebase.");
}

uploadProducts().catch(console.error);
