import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu-ficica',
  templateUrl: './calcu-ficica.component.html',
  styleUrls: ['./calcu-ficica.component.css']
})
export class CalcuFicicaComponent implements OnInit {

  public operador_a;
  public operador_b;
  public operacion;
  public resultado = '';
  public pantalla = '';


  constructor() { }

  ngOnInit() {
  }

  obtenerEvenButton(parametro: string) {
    let aux_a = '';
    let aux_b = '';
    let aux_r = '';
    // función de cada botón
    if (parametro === '1') {
      this.resultado = this.resultado + '1';
    } if (parametro === '2') {
      this.resultado = this.resultado + '2';
    } if (parametro === '3') {
      this.resultado = this.resultado + '3';
    } if (parametro === '4') {
      this.resultado = this.resultado + '4';
    } if (parametro === '5') {
      this.resultado = this.resultado + '5';
    } if (parametro === '6') {
      this.resultado = this.resultado + '6';
    } if (parametro === '7') {
      this.resultado = this.resultado + '7';
    } if (parametro === '8') {
      this.resultado = this.resultado + '8';
    } if (parametro === '9') {
      this.resultado = this.resultado + '9';
    } if (parametro === '0') {
      this.resultado = this.resultado + '0';
    }
    // parametros operadores
    if (parametro === 'C') {
      this.reset();
    } if (parametro === '+') {
      this.operador_a = this.resultado;
      aux_a = this.resultado;
      this.operacion = '+';
      aux_r = '+';
      this.limpiar();
    } if (parametro === '-') {
      this.operador_a = this.resultado;
      aux_a = this.resultado;
      this.operacion = '-';
      aux_r = '-';
      this.limpiar();
    } if (parametro === '*') {
      this.operador_a = this.resultado;
      aux_a = this.resultado;
      this.operacion = '*';
      aux_r = '*';
      this.limpiar();
    } if (parametro === '÷') {
      this.operador_a = this.resultado;
      aux_a = this.resultado;
      this.operacion = '÷';
      aux_r = '÷';
      this.limpiar();
    }
    if (parametro === '=') {
      this.operador_b = this.resultado;
      aux_b = this.resultado;
      this.resolver();
    }
    this.pantalla = aux_a + ' ' + aux_r + ' ' + aux_b;
  }

  reset() {
    this.resultado = '';
    this.operador_a = 0;
    this.operador_b = 0;
    this.operacion = '';
  }

  limpiar() {
    this.resultado = '';
  }
  resolver() {
    this.resultado = '';
    let res = 0;
    switch (this.operacion) {
      case '+':
        res = Number(this.operador_a) + Number(this.operador_b);
        this.resultado = String(res);
        break;
      case '-':
        res = this.operador_a - this.operador_b;
        this.resultado = String(res);
        break;
      case '*':
        res = this.operador_a * this.operador_b;
        this.resultado = String(res);
        break;
      case '÷':
        if (this.operador_a || this.operador_b === '0') {
          this.pantalla = 'Error'
        }
        res = this.operador_a / this.operador_b;
        this.resultado = String(res);
        break;
    }
  }
}




/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-calcu-ficica',
  templateUrl: './calcu-ficica.component.html',
  styleUrls: ['./calcu-ficica.component.css']
})
export class CalcuFicicaComponent {

  public num: number;
  public array_1 = 0;
  public array_2 = 0;
  public pantalla: number;
  public operador = '';


    public n1 = document.getElementById('n1');
    public n2 = document.getElementById('n2');
    public n3 = document.getElementById('n3');
    public n4 = document.getElementById('n4');
    public n5 = document.getElementById('n5');
    public n6 = document.getElementById('n6');
    public n7 = document.getElementById('n7');
    public n8 = document.getElementById('n8');
    public n9 = document.getElementById('n9');
    public n0 = document.getElementById('n0');
    // operadores
    public limpiar = document.getElementById('limpiar');
    public divi = document.getElementById('divi');
    public res = document.getElementById('res');
    public mult = document.getElementById('mult');
    public igual = document.getElementById('igual');
    public pantalla = document.getElementById('pantalla');


    function n1() {

    }

   constructor() { }


  obtenerOperador(operador: string) {
    this.operador = operador;
    console.log(operador)
    console.log(event)
  }
  obtenerNumeros(num: number) {



  if (this.array_1.length === 0) {
    this.array_1.push(num)
  } if (this.operador !== '') {
    this.array_2.push(num)
  }
  const anterior = num;
  this.array_1 = num + anterior;


    this.array_1 = num
    console.log(this.array_1);
    console.log(this.array_2);
  }
  operacionMat() {
    switch (this.operador) {
      case '+':
        this.pantalla = Number(this.array_1) + Number(this.array_2);
        break;
      case '-':
        this.pantalla = this.array_1 - this.array_2;
        break;
      case '*':
        this.pantalla = this.array_1 * this.array_2;
        break;
      case '÷':
        this.pantalla = this.array_1 / this.array_2;
        break;
    }
  }


  obtenerNumeros() {
    interface Operaciones {
      array_1: number;
      array_2: number;
      mostrarResultado(): number;
    }

    function compruebaNumero(numero) {
      if (isNaN(numero)) {
        return false;
      }
      return true;
    }

    class Sumar implements Operaciones {
      array_1: number;
      array_2: number;
      constructor(a: number, b: number) {
        this.array_1 = a;
        this.array_2 = b;
      }

      operacionMat() {
        if (compruebaNumero(this.array_1) && compruebaNumero(this.array_2)) {
          return this.pantalla = this.array_1 + this.array_2;
        }
        return 0;
      }
    }
    // otras operaciones...
  }


}
*/
