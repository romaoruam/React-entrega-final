# 🛒 Altas Cumbres - E-commerce de Sándwiches de Miga

Este es un e-commerce desarrollado con **React** que permite a los usuarios explorar y comprar los mejores sándwiches de miga. La aplicación utiliza **Firebase Firestore** para gestionar los productos y las órdenes de compra.

## 🚀 Instalación

1. Clona este repositorio:
   
   git clone https://github.com/romaoruam/React-entrega-final.git

2. Instala las dependencias:
npm install

3. Crea un archivo .env con las credenciales de Firebase:

REACT_APP_FIREBASE_API_KEY=TU_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=TU_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=TU_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID=TU_MEASUREMENT_ID

4. Ejecuta el proyecto:
npm start

🛠️ Tecnologías utilizadas
React - Framework de JavaScript.
Firebase Firestore - Base de datos en la nube.
React Router - Navegación SPA.
Bootstrap - Estilos y componentes UI.

📂 Estructura del proyecto
/src
 ├── /components
 │   ├── Cart.jsx
 │   ├── CartWidget.jsx
 │   ├── CheckoutForm.jsx
 │   ├── Contacto.jsx
 │   ├── Home.jsx
 │   ├── Item.jsx
 │   ├── ItemCount.jsx
 │   ├── ItemDetail.jsx
 │   ├── ItemDetailContainer.jsx
 │   ├── ItemList.jsx
 │   ├── ItemListContainer.jsx
 │   ├── NavBar.jsx
 │   ├── ProductFilter.jsx
 │   ├── Sucursal.jsx
 │   └── Styles.css
 ├── /context
 │   ├── CartContext.jsx
 ├── firebaseConfig.js
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── mockProducts.js (solo para referencia)

📌 Funcionalidades principales
✅ Listado de productos dinámico.
✅ Detalle de productos con stock disponible.
✅ Carrito de compras con contexto global.
✅ Registro de compras en Firestore.
✅ Navegación sin recargas con React Router.
✅ Renderizado condicional para carrito vacío, sin stock, etc.

🛒 Flujo de compra
Seleccionar productos desde el catálogo.
Agregar al carrito con cantidad deseada.
Ver carrito, modificar cantidades o eliminar productos.
Finalizar compra, ingresando los datos en el formulario.
Confirmar y recibir el ID de compra generado en Firebase Firestore.

📜 Desarrollado por
Mauro Emmanuel Romano - Proyecto Final React 2025
