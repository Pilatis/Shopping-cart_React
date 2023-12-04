
import { useState } from 'react'
import propTypes from 'prop-types'
import AppContext from './AppContext'


const Provider = ({ children }) => {//define componente funcional Provider. Esse componente envolve outros componentes
                                   //e fornece um contexto para eles

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false)

    const value = {//Um objeto `value` que contém os valores e as funções de atualizações
      products,
      setProducts,
      loading,
      setLoading,
      cartItems,
      setCartItems,
      isCartVisible,
      setIsCartVisible,
    };

  return (  //Usa o `AppContext.Provider` para fornecer o contexto para os componentes filhos 
    <AppContext.Provider value={ value }>
       {children}
    </AppContext.Provider>
  )
}

export default Provider;

Provider.propTypes = { //Está definindo as propriedades para o Provider usando o propTypes para garantir que a prop children seja fornecida ao componente
    children: propTypes.any,
}.isRequired;
