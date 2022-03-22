import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-par',
  templateUrl: './num-par.component.html',
  styles: []
})
export class NumParComponent implements OnInit {

  public operador: number;
  public array_num_par = new Array<number>();

  constructor() { }
  ngOnInit() { }

  public ParRevercible(): void {
    this.array_num_par = [];
    for (let index = this.operador; index >= 0; index--) {
      const auxiliar = index + 1;
      if ((auxiliar) % 2 === 0) {
        console.log(auxiliar);
        this.array_num_par.push(auxiliar);
      }

    }

  }

  // numeroPares() {
  //   for (let index = this.operador; index > 0  ; index--) {
  //     if ((index)  % 2 === 0) {
  //       console.log(index);
  //     }
  //   }
  // }

  // otra() {
  //   while ( this.operador > 0 ) {
  //     if ((this.operador)  % 2 === 0) {
  //       console.log(this.operador);
  //       this.operador --;
  //     } else {
  //       this.operador --;
  //     }
  //   }
  // }



  // Par() {

  //   for (let index = 0; index < this.operador; index++) {
  //     // console.log(index + 1);
  //     if ((index + 1)  % 2 === 0) {
  //       console.log(index + 1 );
  //     }
  //   }
  // }
}

