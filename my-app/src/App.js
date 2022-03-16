//import logo from './logo.svg';
import "./App.css";

function App() {

const livros = [
  {
        nome: 'Ego Transformado',
        autor: 'Timothy Keller',
        qt_paginas: 48,
        bestSeller: false,
  },
  {
        nome: 'Até que nada mais importe',
        autor: 'Luciano Subirá',
        qt_paginas: 154,
        bestSeller: true,
  },
  {
    nome: 'Discipulado',
    autor: 'Dietrich Bonhoeffer',
    qt_paginas: 253,
    bestSeller: false,
  },
  {
    nome: 'Cristianismo Puro e Simples',
    autor: 'C.S Lewis',
    qt_paginas: 288,
    bestSeller: true
  }
]

const venda = [
  {
    vendedor: 'Marcos',
    frutaVendida: 'abacaxi',
    loja: 'Loja 1'
  },
  {
    vendedor: 'João',
    frutaVendida: 'abacate',
    loja: 'Loja 2'
  },
  {
    vendedor: 'Pedro',
    frutaVendida: 'abacaxi',
    loja: 'Loja 3'
  },
]

//Variáveis Filter

const best = livros.filter(book => {
  return book.bestSeller === false
})

const fruit = venda.filter(sellerFruit=>{
  return sellerFruit.frutaVendida === 'abacaxi'
})

const teste = fruit.map(teste1 => {return teste1})
console.log(teste[0].frutaVendida)

    return (
      <div className= 'App'>
        <div className='title-livros'> <h1>Livros que não são Best Sellers</h1> </div>
        {
          best.map(livroBestSeller =>{
            return (
              <div className='principal'>
                <div className='Livros'>
                  <p>Nome do Livro: {livroBestSeller.nome}</p>
                  <p>Autor: {livroBestSeller.autor}</p>
                  <p>Quantidade de Páginas: {livroBestSeller.qt_paginas}</p>
                </div>
              </div>
            )
          })
        }
        <div className='title-vendas'>
          <h1>Venda de Abacaxi</h1>
        </div>
        {
          fruit.map(frutaAbacaxi => {
            return (
              <div className='abacaxi'>
                <p>Nome do Vendedor: {frutaAbacaxi.vendedor}</p>
                <p>Fruta Vendida: {frutaAbacaxi.frutaVendida}</p>
                <p>Loja: {frutaAbacaxi.loja}</p>
              </div>
            )
          })
        }
      </div>
    );
}

export default App;
