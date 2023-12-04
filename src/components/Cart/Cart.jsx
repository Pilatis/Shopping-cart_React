import { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'


const Cart = () => {//Responsável por exibir o carrinho e o preço total. Usando o contexto fornecido pelo `AppContext`

  const { cartItems, isCartVisible } = useContext(AppContext);//Usa o useContext para acessar as variáveis de estado cartItems e isCartVisible

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);//O cartItem é o preço dos itens do carrinho
        //O  `reduce((acc, item) => item.price + acc, 0)`  É um metodo de arrya no JS. Que ele executa a função callback em cada elemento.
         //A função callback rebe os 2 argumentos `acc(acumulador)` soma o preço do item atual ao acumulador
         //`item` Representa cada item do array cartItems durante a iteração.
         //item.price + acc: Está somando o preço do item atual ao acumulador.
        // 0: É o valor inicial do acumulador (acc). Neste caso, a função reduce começa a calcular o acumulador a partir do valor zero.  
                                                
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>//se isCartVisible for verdadeiro adiciona a classe cart--active
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice)}</div>
    </section>
  )
}

export default Cart
