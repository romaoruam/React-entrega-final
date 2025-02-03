import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUMX6ripIsFB8QCRzAS2uF74nUAaTEJXw",
  authDomain: "altas-cumbres-e-commerce.firebaseapp.com",
  projectId: "altas-cumbres-e-commerce",
  storageBucket: "altas-cumbres-e-commerce.firebasestorage.app",
  messagingSenderId: "762540776392",
  appId: "1:762540776392:web:82e8a5fa3a831c30a1fefd",
  measurementId: "G-RG8C07703S"
};

// 🔥 Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Inicializa Firestore
const db = getFirestore(app);

// 📌 Exporta `db` correctamente
export { db };