import { inicializarCarrinho } from "./src/menuCarrinho";

const produto1 = {

    id: 1,
    nome: 'Casaco Branco',
    marca: 'zara',
    preco: 70,
    nomeArquivoImagem: 'product-1.jpg'

};

const produto2 = {

    id: 2,
    nome: 'Sobretudo Azul Marinho',
    marca: 'zara',
    preco: 110,
    nomeArquivoImagem: 'product-2.jpg'

};

const catalogo =[
   {
      "id":1,
      "marca":"Zara",
      "nome":"Camisa Larga com Bolsos",
      "preco":70,
      "imagem":"product-1.jpg",
      "feminino":false
   },
   {
      "id":2,
      "marca":"Zara",
      "nome":"Casaco Reto com Lã",
      "preco":85,
      "imagem":"product-2.jpg",
      "feminino":true
   },
   {
      "id":3,
      "marca":"Zara",
      "nome":"Jaqueta com Efeito Camurça",
      "preco":60,
      "imagem":"product-3.jpg",
      "feminino":false
   },
   {
      "id":4,
      "marca":"Zara",
      "nome":"Sobretudo em Mescla de Lã",
      "preco":160,
      "imagem":"product-4.jpg",
      "feminino":false
   },
   {
      "id":5,
      "marca":"Zara",
      "nome":"Camisa Larga Acolchoada de Veludo Cotelê",
      "preco":110,
      "imagem":"product-5.jpg",
      "feminino":false
   },
   {
      "id":6,
      "marca":"Zara",
      "nome":"Casaco de Lã com Botões",
      "preco":170,
      "imagem":"product-6.jpg",
      "feminino":true
   },
   {
      "id":7,
      "marca":"Zara",
      "nome":"Casaco com Botões",
      "preco":75,
      "imagem":"product-7.jpg",
      "feminino":true
   },
   {
      "id":8,
      "marca":"Zara",
      "nome":"Colete Comprido com Cinto",
      "preco":88,
      "imagem":"product-8.jpg",
      "feminino":true
   }
];

// const lista = ['info1', 'info2', 'info3', 'info4']
// lista[0];

for(const produtoCatalogo of catalogo ){

   const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
    
    <img 
        src="./assets/img/${produtoCatalogo.imagem}" 
        alt="Produto 1 do E-Commerce"
        style="height: 300px"
    />
    <p class='marca'>${produtoCatalogo.marca}</p>
    <P>${produtoCatalogo.nome}</P>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
</div>`

document.getElementById('container-produto').innerHTML += cartaoProduto;
}

inicializarCarrinho();
