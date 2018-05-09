import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  public frase:any = {
    mensaje: "Un gran poder conlleva una gran responsabilidad",
    autor: "Ben Parker"
  }

  mostrar:boolean = false;

  personajes:string[] = ["Spiderman", "Ben", "Octopus"]
}
