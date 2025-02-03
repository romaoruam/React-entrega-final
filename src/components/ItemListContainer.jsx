import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mockProducts';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filtered = products.filter(
        (product) => product.category === categoryId
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;
