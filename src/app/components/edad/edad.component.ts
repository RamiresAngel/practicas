import { Component } from '@angular/core';



@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styles: []
})






export class EdadComponent {


  public nacimiento: number ;
  public resultado: number;

  fechaactual: Date = new Date();
  ahora: number = this.fechaactual.getFullYear();

  constructor() {
  }

  // dentro de operador debo de llamar a
  // fechaactual el año que resibo en mi input
  // y realisar la operacion ( fechaactual - año ) y
  // resultado lo mandamos al h3 de HTML

  operador() {
    this.resultado = this.ahora - this.nacimiento;
    console.log(this.ahora - this.nacimiento);

  }


}


