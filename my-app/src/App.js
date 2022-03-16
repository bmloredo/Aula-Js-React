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

    return (
      <div>
        {best[0].autor}
        <br></br>
        {best[1].autor}
        
      </div>
    );
}

export default App;
