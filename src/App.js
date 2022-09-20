import './App.css';
import React, { useState, useEffect } from "react";
import { comparar } from "./componentes/Comparar.js";
import { resultadoA } from './componentes/Comparar.js';
import { resultadoB } from './componentes/Comparar.js';


export function App() {

  const [senha, setSenha] = useState("");
  const [tentativa, setTentativa] = useState("");
  const [senhaOficial, setsenhaOficial] = useState("");
  const [resultadosSenha, setResultados] = useState([]);
  const [resultadosA, setResultadosA] = useState([]);
  const [resultadosB, setResultadosB] = useState([]);


  function salvarSenha() {
    setsenhaOficial(senha);
    setSenha("");
    //console.log("sajkux");
  }

  function chamaComparar() {
    comparar({ tentativa }, { senhaOficial });
    if(resultadoA>0){
      resultadosSenha.push(tentativa);
      resultadosA.push(resultadoA);
      resultadosB.push(resultadoB);
    }
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
          {resultadosSenha.map((senha, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{senha}</td>
              <td>{resultadosA[index]}A{resultadosB[index]}B</td>
            </tr>
          ))}
        </table>

      </div>
    </div>

  );
}

export default App;
