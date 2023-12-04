
import { useState } from 'react'
import propTypes from 'prop-types'
import AppContext from './AppContext'


const Provider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false)

    const value = {
      products,
      setProducts,
      loading,
      setLoading,
      cartItems,
      setCartItems,
      isCartVisible,
      setIsCartVisible,
    };

  return (
    <AppContext.Provider value={ value }>
       {children}
    </AppContext.Provider>
  )
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;