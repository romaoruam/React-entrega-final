import React from "react";
import Item from "./Item";  // Asegúrate de que el componente esté importado

function ItemList({ productos }) {
  if (!productos || productos.length === 0) {
    return <h3>No hay productos disponibles...</h3>;
  }

  return (
    <div className="row">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
