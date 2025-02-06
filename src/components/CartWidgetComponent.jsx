import myImage from '../img/cartJ.jpg';
import './CartWidgetComponent.css' 

export default function CartWidget(){
  return (
    <div className='CartContainer'>
      <img className= 'imagenCarrito' src={myImage} alt="Carrito" />
      <span className='ContCarrito'>1</span>
    </div>
  );
};