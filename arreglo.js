"use strict"

var platillos = ["ceviche","tamales","pasta"];

var bebidas = new Array("Jamaica","Cerveza","Licor");

var menu = [platillos,bebidas];

var comidaHTML = Array.from(document.querySelectorAll('.platillo p'));

var comida = comidaHTML.map(platillo => platillo.textContent);

console.log(comida);