//import logo from './logo.svg';
import "./App.css";

function App() {
  const pessoas = [
    {
      nome: "Bruno",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      paiExiste: true,
      nomePai: "Edmo",
    },
    {
      nome: "Cassio",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      paiExiste: true,
      nomePai: "Edmo",
    },
    {
      nome: "Eduardo",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      paiExiste: true,
      nomePai: "Edmo",
    },
    {
      nome: "Fatima",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      paiExiste: false,
    },
    {
      nome: "Ellen",
      idade: 26,
      dtNasc: "20/05/1995",
      nomeMae: "Sandra",
      paiExiste: false,
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

                {pessoa.paiExiste && <p>Nome do Pai: {pessoa.nomePai}</p>}
              </div>
            </div>
          )
        })
        }
    </div>
  );
}

export default App;
