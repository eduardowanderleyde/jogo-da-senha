import React, { useState } from "react";

export let resultadoA = 0;
export let resultadoB = 0;

export function comparar({ tentativa }, { senhaOficial }) {

  resultadoA = 0;
  resultadoB = 0;

  if (tentativa === senhaOficial) {
    alert("Parabéns, você ganhou");

  } else {

    let numeros = [];

    for (let a = 0; a < senhaOficial.length; a++) {
      numeros[a] = senhaOficial[a];
      //console.log(letras)
    }

    for (let i = 0; i < tentativa.length; i++) {

      const procurar = tentativa.indexOf(senhaOficial[i]);

      if (procurar == [i]) {
        resultadoA++;
        //console.log(resultadoA)
      } else if (procurar >= 0) {
        resultadoB++;
        //console.log(resultadoB)
      }
    }
  }
};
