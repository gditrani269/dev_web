"use strict"

var temporizador = setTimeout(function(){
    setColor();
}, 20000);

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "red" ? "green" : "red";
};

function stopChangeColor() {
    clearInterval(temporizador);
};