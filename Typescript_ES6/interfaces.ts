interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen : Xmen){
  console.log(nombre);

}

function enviarCuartel(xmen: Xmen){
  console.log(nombre);
}

let wolverine:Xmen = {
  nombre: "Lobezno",
  poder: "Cuchillas"
}

enviarMision(wolverine);
enviarCuartel(wolverine);
