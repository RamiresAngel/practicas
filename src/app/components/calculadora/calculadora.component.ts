import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public expo_1: number;
  public expo_2: number;
  public operador = '';
  public respuesta: number;
  public infinity: string;


  constructor() { }

  ngOnInit() {
  }
  operacionMat() {

    switch (this.operador) {
      case '+':
        this.respuesta = Number(this.expo_1) + Number(this.expo_2);
        console.log(Number(this.expo_1) + Number(this.expo_2))


        break;
      case '-':
        this.respuesta = this.expo_1 - this.expo_2;
        console.log(this.expo_1 - this.expo_2)

        break;
      case '*':
        this.respuesta = this.expo_1 * this.expo_2;
        console.log(this.expo_1 * this.expo_2)

        break;
      case '/':
        if (this.expo_2 = 0) {
          this.respuesta = Number('Error');
          console.log('Error')

        }
        this.respuesta = this.expo_1 / this.expo_2;
        console.log(this.expo_1 / this.expo_2)

        break;
    }
  }
}
