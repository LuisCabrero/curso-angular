let avenger = {
  nombre: "Steve",
  clave: "Capitan américa",
  poder: "Droga"
}
/*
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;
*/

/* Destructuración de objetos */

let { nombre:nombreSteve, clave, poder} = avenger;

/* Arrays */
let avengers:string[] = ["hulk", "thor", "steve"];

/* Desestructuración secuencial */
let [ thor, capi, ironman ] = avengers;
