let miFuncion = function(a:any){
  return a;
}

let miFuncionF = (a:any) => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Con flecha"));

let miFuncion2 = function(a:number, b:number){
  return a + b;
}

let miFuncion2F = (a:number,b:number) => a + b;

let miFuncion3 = function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

let hulk = {
  nombre: "Bruce",
  smash: function(){
    setTimeout(() => console.log(this.nombre+" smash!"), 1400);

  }
}

hulk.smash();
