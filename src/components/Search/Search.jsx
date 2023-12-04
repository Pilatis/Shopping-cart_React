import { useContext } from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const Search = () => {

  const { setProducts, setLoading } = useContext(AppContext);//Pega os estados dentro do AppContext. Que são estados de mudanças(funções que atualizam o estado primario)
  const [searchValue, setSearchValue] = useState('');
    
  const handleSearch = async (e) => {
    e.preventDefault();//prevenir o comportamento padrão de atualização da página, 
    setLoading(true);//indica que a busca está em andamento e permite que a interface do usuário (UI) mostre um indicador de carregamento para indicar ao usuário que a operação está em progresso.

    const produtcs = await fetchProducts(searchValue);//função fetchProducts para buscar os produtos com base no valor atual da caixa de pesquisa (searchValue). 
                                     //A palavra-chave await é utilizada antes da chamada da função para aguardar a resolução da Promise retornada pela função fetchProducts. 
                                     //Isso garante que a execução aguarde até que a operação de busca de produtos seja concluída antes de prosseguir para a próxima linha de código.
    setProducts(produtcs);//Atualiza o estado products com os produtos obtidos da função fetchProducts.
    setLoading(false);// Define o estado loading como false. Isso sinaliza que a operação de busca foi concluída, 
    setSearchValue('');//Limpa o campo de pesquisa, definindo searchValue como uma string vazia (''). 
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
