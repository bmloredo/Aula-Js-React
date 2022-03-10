//import logo from './logo.svg';
import "./App.css";

function App() {
  const pessoas = [
    {
      nome: "Bruno",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      nomePai: "Edmo"
    },
    {
      nome: "Cassio",
      idade: 38,
      dtNasc: "05/04/1987",
      nomeMae: "Lucia Vera",
      nomePai: ""
    },
    {
      nome: "Eduardo",
      idade: 39,
      dtNasc: "13/05/1983",
      nomeMae: "Marcia",
      nomePai: "Adelmo"
    },
    {
      nome: "Fatima",
      idade: 21,
      dtNasc: "08/02/2001",
      nomeMae: "Cicera",
      nomePai: "Valdemir",
    },
    {
      nome: "Ellen",
      idade: 38,
      dtNasc: "08/09/1983",
      nomeMae: "Marta",
      nomePai: ""
    },
  ];

  return (
    <div className="App">
      {
        pessoas.map(pessoa => {
          return (
            <div className="principal">
              <div className="pessoa"> 
                <p>Nome: {pessoa.nome}</p>
                <p>idade: {pessoa.idade}</p>
                <p>Data de Nascimento: {pessoa.dtNasc}</p>
                <p>Nome da Mãe: {pessoa.nomeMae}</p>
                {pessoa.nomePai && <p>Nome do Pai: {pessoa.nomePai}</p>}
              </div>
            </div>
          )
        })
        }
    </div>
  );
}

export default App;
