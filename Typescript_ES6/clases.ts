class Avenger {
  nombre:string = "antman";
  equipo:string;
  nombreReal:string;

  puedePelear:boolean;
  peleasGanadas:number;

  /* Constructor */
  constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas:number){
    console.log("Ejecutando el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    this.puedePelear = puedePelear;
    this.peleasGanadas = peleasGanadas;

  }

}

let antman:Avenger = new Avenger("antman", "escudo", "antonio", true, 1);

console.log(antman);
