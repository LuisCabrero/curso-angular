"use strict";
var mensaje = "hola";
var OPCIONES = "todas";
if (true) {
    var mensaje_1 = "adios";
}
if (true) {
    var OPCIONES_1 = "ninguna";
}
console.log(mensaje);
var nombre = "123";
var numero;
var booleano;
var cualquiera; //puede ser de cualquier tipo
var hoy = new Date();
var nombre_persona = "Pepe";
var apellidos = "Perez";
var edad = 32;
var texto = "Hola " + nombre_persona + " " + apellidos + " (" + edad + ")";
console.log(texto);
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
