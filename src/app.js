/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = ".com";

function generadorDominios() {
  let listaDominios = document.getElementById("listaDominios");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let dominio = pronoun[i] + adj[j] + noun[k] + extension;
        let li = document.createElement("li");
        li.textContent = dominio;

        // Agregar el <li> al contenedor
        listaDominios.appendChild(li);
      }
    }
  }
}
generadorDominios();
