import  { useContext } from 'react'
import { BsFillCartDashFill } from "react-icons/bs";
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import './CartItem.css'
import propTypes from 'prop-types'




const CartItem = ({ data }) => {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };


  return (
    <section className="cart-item">
        <img 
          src={thumbnail} 
          alt="Imagem do produto" 
          className='cart-item-image'
        />

        <div className="cart-item-content">
            <h3 className='cart-item-title'>{title}</h3>
            <h3 className='cart-item-price'>{formatCurrency(price)}</h3>

            <button 
             type="button" 
             className="button__remove-item"
             onClick={ handleRemoveItem }>
            <BsFillCartDashFill />
            </button>
        </div>
    </section>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;