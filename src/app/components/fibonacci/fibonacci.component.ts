import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  // public suma_num: number;

  public limite:number;
  public i: number;
  public fib = [];
  public array_fib = new Array<number>();
  constructor() { }
  ngOnInit() { }
  // public serieFibonacci() {
  //   let r_1 = 1;
  //   let r_2 = 0;
  //   for (let index = 2; index <= this.limite; index++) {
  //     let r_3 = (r_1 - 2) + (r_2 - 1);
  //     return this.serieFibonacci;
  //     // console.log(r_3)
  //   }
  // }

  // public serieFibonaccci() {
  //   let suma_num = 1;
  //   for (let index = 2; index <= this.limite; index++) {
  //     suma_num = (index - 2) + (index - 1);
  //     console.log(suma_num);
  //     // console.log(index)
  //   }
  // }
  public serieFibonacccci() {
    this.array_fib =[];
    this.fib[0] = 0;
    this.fib[1] = 1;
    for (this.i = 2;this.i<= this.limite; this.i++) {
      this.fib[this.i] = this.fib[this.i - 2] + this.fib[this.i - 1];
      console.log(this.fib[this.i]);
      this.array_fib.push(this.fib[this.i])
      if (this.fib[this.i] >= this.limite) {
        break ;
      }
    }

  }


}
  //   public formu_Facto (){
  //   this.array_multiplo = [];
  //   let suc_multiplo = this.inicio;
  //   for (let index = 1; index < this.inicio; index++) {
  //     this.array_multiplo.unshift(suc_multiplo);
  //     suc_multiplo = suc_multiplo - this.resta;
  //     let desenso_multi= suc_multiplo * 2 ;
  //     console.log(suc_multiplo);
  //     console.log(desenso_multi);
  //   }
  // }
