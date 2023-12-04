<h1>Link do Projeto</h1>

https://shopping-cart-react-zeta.vercel.app/

<br>

<h1 align="center">Resume do Shopping-cart_React</h1>

<h3>Provider (Fornecedor):</h3>

Gerencia o estado global da aplicação, incluindo informações sobre produtos, itens do carrinho e visibilidade do carrinho.
 Controla os estados products, cartItems, loading e isCartVisible por meio do contexto AppContext.

 
<h3>Cart (Carrinho):</h3>

Exibe os itens presentes no carrinho e calcula o preço total dos itens.
 Utiliza useContext para acessar cartItems e isCartVisible do contexto AppContext para renderizar os itens do carrinho e calcular o preço total.

 
<h3>CartButton (Botão do Carrinho):</h3>

 Renderiza um botão que exibe o ícone do carrinho e o número de itens no carrinho.
 Utiliza useContext para acessar cartItems e isCartVisible do contexto AppContext. Alterna a visibilidade do carrinho ao clicar no botão.

 
<h3>CartItem (Item do Carrinho):</h3>

Exibe as informações de um item no carrinho e permite a remoção desse item.
 Utiliza useContext para acessar cartItems e setCartItems do contexto AppContext. Renderiza as informações do item do carrinho e permite a remoção desse item ao clicar em um botão.
 
<h3>Products (Produtos):</h3>

 Busca e exibe uma lista de produtos.
 Utiliza useContext para acessar products e loading do contexto AppContext. Utiliza fetchProducts para buscar produtos e exibe uma lista de cartões de produto.

 
<h3>Search (Busca):</h3>

Facilita a busca de produtos.
Utiliza useContext para acessar setProducts e setLoading do contexto AppContext. Permite ao usuário inserir um termo de pesquisa, busca produtos com base nesse termo e exibe os resultados.

