import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
    <div className='tarjetaDetalle'>
     <ItemDetail product={product} />
      </div>
    </>
  );
}
