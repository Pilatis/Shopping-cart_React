import { useContext } from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const Search = () => {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
    
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const produtcs = await fetchProducts(searchValue);

    setProducts(produtcs);
    setLoading(false);
    setSearchValue('');
  }

  return (
    <div>
          <form className='search-bar' onSubmit={handleSearch}>
              <input 
               type="search"
               value={searchValue}//quem esta controlando é o evento do react
               className='search__input' 
               placeholder='Buscar produtos' 
               onChange={({ target }) => setSearchValue(target.value)}
               required 
              />
             
              <button type='submit' className='search__button'>
              <CiSearch />
              </button>
          </form>
    </div>
  )
}

export default Search
//Na função onChange nos passamos oque estamos digitando no nosso input.
//Pra isso target pega o que está disparando o evento.
//Passamos pra função onde atualiza o estado e ela vai pegar o valor do target.value e vai salvar pra dentro do estado
//Esse evento ele atualiza em tempo real