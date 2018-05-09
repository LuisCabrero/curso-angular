"use strict";
var Avenger = /** @class */ (function () {
    /* Constructor */
    function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre = "antman";
        console.log("Ejecutando el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    return Avenger;
}());
var antman = new Avenger("antman", "escudo", "antonio", true, 1);
console.log(antman);
