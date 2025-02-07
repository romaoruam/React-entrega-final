import Item from "./Item";

const ItemList = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return <h2 className="text-center mt-5">No hay productos disponibles</h2>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Item 
            key={product.id} 
            id={product.id}  // ✅ Pasamos el ID correcto de Firestore
            name={product.name} 
            image={product.image} 
            price={product.price} 
            description={product.description} 
            stock={product.stock} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
