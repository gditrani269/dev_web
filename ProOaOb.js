"use strict"

//Sistema de declaración de objetos
class Pantalla {
    constructor(marca, modelo, pulgadas) {
        //Aca se cargan las propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    };
    encendido() {
        console.log('La pantalla '+this.marca+' se ha encendido');
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