import Counter from "./Counter";

export default function ItemDetail({ product }) {
    return (
        <>
            <p>ID: {product?.id}</p>
            <h3>Nombre: {product?.title}</h3>
            <img src={product?.image} alt="" />
            <p>Descripcion: {product?.description}</p>
            <p>Categoria: {product?.category}</p>
            <p>Precio ${product?.price}</p>
            <Counter />
        </>
    );
}