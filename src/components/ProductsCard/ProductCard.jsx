import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from "react-icons/fa";
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';


const ProductCard = ({ data }) => {

  const { title, thumbnail, price, condition } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
     setCartItems([ ...cartItems, data ])
  }

  return (
    <section className='product-card'>
       
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className='card__image' /> {/*Para melhorar a qualidade da imagem */}
      
      <div className="card__infos">
        <h2 className='card__price'>{formatCurrency(price)}</h2>
        <h2 className='card__title'>{title}</h2>
        <h3>{condition}</h3>
      </div>

      <button 
        type='button' 
        className='button__add-cart' 
        onClick={ handleAddCart }>
        <FaCartPlus />
      </button>

    </section>
  )
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired

export default ProductCard;