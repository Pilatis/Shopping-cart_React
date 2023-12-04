import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from "react-icons/fa";
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';


const ProductCard = ({ data }) => {

  const { title, thumbnail, price, condition } = data;//destruturando
  const { cartItems, setCartItems } = useContext(AppContext);//pegando os estados dentro do AppContext

  const handleAddCart = () => {//Define a função handleAddCart, que é chamada quando o botão de adicionar ao carrinho é clicado.
     setCartItems([ ...cartItems, data ])//Esta função utiliza setCartItems para adicionar o data atual ao cartItems, criando um novo array com os itens anteriores e o novo item.
  }

  return (
    <section className='product-card'>
       
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className='card__image' /> {/*Para melhorar a qualidade da imagem e 
                                                                                                     expressão regular para modificar o nome do arquivo da imagem*/}
      
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
