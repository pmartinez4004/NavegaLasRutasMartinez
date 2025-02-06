import { useState, useEffect } from 'react';
import { getCategory, getProducts } from '../../asyncMock.js';
import ProductCard from './ProductCard.jsx';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import ItemList from './ItemList.jsx';

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]);

  return (
    <>
     <ItemList products={products} />
    </>
  );
}
