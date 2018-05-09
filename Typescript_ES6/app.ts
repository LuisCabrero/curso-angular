let mensaje = "hola";
const OPCIONES = "todas";
if(true){
  let mensaje = "adios";
}

if(true){
  const OPCIONES = "ninguna";
}

console.log(mensaje);


let nombre:string = "123";
let numero:number;
let booleano:boolean;
let cualquiera:any; //puede ser de cualquier tipo

let hoy:Date = new Date();

let nombre_persona:string = "Pepe";
let apellidos:string = "Perez";
let edad:number = 32;

let texto = `Hola ${nombre_persona} ${apellidos} (${edad})`;

console.log(texto);


function activar(quien:string, objeto:string = "batiseñal", momento?:string){
  let mensaje:string;
  if(momento){
    mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
  }else{
    mensaje = `${ quien } activó la ${ objeto }`;
  }

  console.log(mensaje);
}

activar("Gordon");
