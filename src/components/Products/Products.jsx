import  { useEffect, useContext } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductsCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {

    const { products, setProducts, loading, setLoading } = useContext(AppContext)
    

    useEffect(() => {
    
      fetchProducts('bike').then((response) => {
       setProducts(response);
       setLoading(false)
      });

    }, []);


  return (

   (loading && <Loading />) || (<section className='products container'>
   {products.map((product) => <ProductCard key={product.id} data={product} />)}
   </section>)

  )
}

export default Products