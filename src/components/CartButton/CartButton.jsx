import  { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartButton.css';
import AppContext from '../../context/AppContext'

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
     <>
      <button 
        type="button"
         className='cart__button'
         onClick={ () => setIsCartVisible(!isCartVisible) }>{/*Quando clicado, ele chama a função setIsCartVisible para alternar a visibilidade do carrinho entre visível e invisível.*/}
        
        <FaShoppingCart />
        { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
      </button>
     </>
  )
}

export default CartButton
