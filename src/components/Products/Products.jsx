import  { useEffect, useContext } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductsCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {

    const { products, setProducts, loading, setLoading } = useContext(AppContext)
    

    useEffect(() => {//Utiliza o hook useEffect para realizar operações após a renderização inicial do componente. 
                  //Está disparando uma requisição para buscar produtos assim que o componente é montado
      fetchProducts('bike').then((response) => {//Chama a função fetchProducts é para buscar produtos 
       setProducts(response); //A resposta da requisição, ele atualiza o estado `Products`
       setLoading(false)//E com a resposta da requisição Products define o estado loading como false
      }); //Que indeca a operação de carregamento terminou

    }, []);


  return (

   (loading && <Loading />) || (<section className='products container'>
   {products.map((product) => <ProductCard key={product.id} data={product} />)}
   </section>) // Mapeia os products e renderiza um componente ProductCard para cada produto no array.
      //Cada ProductCard recebe um key exclusivo e os dados do produto através da propriedade data.
  )
}

export default Products
