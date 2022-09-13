import './App.css';
import React, { useState } from "react";
import { comparar } from "./componentes/Comparar.js";
import { resultadoA } from './componentes/Comparar.js';
import { resultadoB } from './componentes/Comparar.js';


export function App() {

  const [senha, setSenha] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [senhaOficial, setsenhaOficial] = useState("");
  const [resultados, setResultados] = useState([]);

  function salvarSenha() {
    setsenhaOficial(senha);
    setSenha("");
  }

  function chamaComparar() {
    comparar({ tentativa }, { senhaOficial });
    resultados.push(tentativa, resultadoA, resultadoB);
  };

  return (

    <div className="App">

      <div className='container'>
        <h1>JOGO DA SENHA</h1>

        <div>
          <h2>Número secreto</h2>
          <input
            type='number'
            placeholder='Digite a senha aqui'
            value={senha}
            onChange={(evt) => setSenha(evt.target.value)}>
          </input>
          <button onClick={salvarSenha}>Salvar senha</button>
        </div>

        <div>
          <h2>Tentativas</h2>
          <input
            type='number'
            placeholder='Tente adivinhar a senha'
            value={tentativa}
            onChange={(evt) => setTentativa(evt.target.value)}>
          </input>
          <button onClick={chamaComparar}>OK</button>
        </div>

        <table border={1}>

          <tr>
            <th>Tentativas</th>
            <th>Senhas</th>
            <th>Resultados</th>
          </tr>

          <tr>
            <td>1</td>
            <td>{resultados[0]}</td>
            <td>{resultados[1]}A{resultados[2]}B</td>
          </tr>

          <tr>
            <td>2</td>
            <td>{resultados[3]}</td>
            <td>{resultados[4]}A{resultados[5]}B</td>
          </tr>

          <tr>
            <td>3</td>
            <td>{resultados[6]}</td>
            <td>{resultados[7]}A{resultados[8]}B</td>
          </tr>

          <tr>
            <td>4</td>
            <td>{resultados[9]}</td>
            <td>{resultados[10]}A{resultados[11]}B</td>
          </tr>

          <tr>
            <td>5</td>
            <td>{resultados[12]}</td>
            <td>{resultados[13]}A{resultados[14]}B</td>
          </tr>

          <tr>
            <td>6</td>
            <td>{resultados[15]}</td>
            <td>{resultados[16]}A{resultados[17]}B</td>
          </tr>

          <tr>
            <td>7</td>
            <td>{resultados[18]}</td>
            <td>{resultados[19]}A{resultados[20]}B</td>
          </tr>

          <tr>
            <td>8</td>
            <td>{resultados[21]}</td>
            <td>{resultados[22]}A{resultados[23]}B</td>
          </tr>

        </table>

      </div>
    </div>
    
  );
}

export default App;
