import { Link } from 'react-router-dom';
import "./ProductCard.css"
export default function ProductCard({ product }) {
  return (
    <>
      <div className="articulos" /*style={{ border: '1px solid grey', padding: 10, height: 390, widht: 290 }}*/  >
        <h3>
          {product.title} - {product.id}
        </h3>
        <img src={product.image} alt={product.title} />
        <p>${product.price}</p>
        <button>
          <Link to={`/product/${product.id}`}>Mas detalles</Link>
        </button>
      </div>
    </>
  );
}
