import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre= "Luis";
  nombre2 = "luis CabrerO garcIa";
  numeros:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "primera",
      casa: "19"
    }
  }

  promesa = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("Llego el dato"), 3500);
  });

  fecha = new Date();

  video = "tgbNymZ7vqY";

  activar:boolean = true;
}
