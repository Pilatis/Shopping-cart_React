const fetchProducts = async (query) => {

   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
   const data = await response.json();

   return data.results;

}

export default fetchProducts;//esse arquivo que vai buscar os dados dos produtos com a API do mercado livre