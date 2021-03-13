"use strict"


var contador = 0;
//const boton = document.getElementsByClassName('boton');

window.addEventListener("keydown", function(event) {
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));
});

/*if(boton){
boton.addEventListener("click", function(){
    console.log('Hola');
});
};*/

window.addEventListener('load', function(){
    console.log('rdy');
});

window.addEventListener("keyup", function(){
    contador++;
    let resultado;
    if(contador>=10){
        let resultado = confirm('Terminamos?');
        console.log(resultado);
        if(resultado==false){
            contador = 0;
        }
        else{
            window.location = "http://www.google.com";
        };
    };
});