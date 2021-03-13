"use strict"

//Manejo de errores con JavaScript

//El try{} prueba el codigo y el catch(){} captura errores para luego enviarlos si lo deseo
try{
var array = new Array (100000000000);
} catch (error) {
    console.log(error.name+": "+error.message);
};

//Generación de errores personalizados en JavaScript
var valor1 = 100;
var valor2 = 200;
//throw new Error() genera un mensaje de error personalizado
try {
    if (valor1 > valor2) {
        console.log('Valido');
    } else {
        throw new Error(valor1+' no es mayor que '+valor2);
    }
} catch (error) {
    console.log(error.name+': '+error.message);
}

//Depurar tu código en JavaScript
class Pantalla {
    constructor(marca, modelo, pulgadas) {
        //Aca se cargan las propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    };
    encendido() {
        debugger;
        this.pulgadas = --this.pulgadas;
        console.log(`La pantalla ${this.pulgadas} se ha encendido`);
    };
    volumen() {
        console.log('El volumen se ha modificado');
    };
    info() {
        console.log('La pantalla '+this.marca+' de modelo '+this.modelo+' es de '+this.pulgadas);
    };
    set peso(value) {
        this.kgs = value.trial();
    };
    get peso() {
        return this.kgs;
    };
    //Las funciones deben invocarse desde la consola con sus argumentos "(argumentos/vacio)" correspondientes
};

const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);