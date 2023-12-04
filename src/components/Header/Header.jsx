
import './Header.css'
import CartButton from '../CartButton/CartButton';
import Search from '../Search/Search';


const Header = () => {

  return (
    <header className="header">
       <div className="container">
        <Search /> 
        <CartButton />
       </div>
    </header>
  )
}

export default Header