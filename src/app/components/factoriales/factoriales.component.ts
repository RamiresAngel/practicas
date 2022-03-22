import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factoriales',
  templateUrl: './factoriales.component.html',
  styleUrls: ['./factoriales.component.css']
})
export class FactorialesComponent implements OnInit {
  public inicio: number;
  public resultado: number;



  // esta variables son de formu_Facto()
  // public array_multiplo = new Array<number>();
  // public suc_multiplo = 0;
  // public resta = 1;

  constructor() { }

  ngOnInit() {
  }

  public factoFormula() {
    this.resultado = this.inicio;
    for (let index = this.inicio - 1; index >= 1; index--) {
      this.resultado = this.resultado * index;
      console.log(this.resultado);
    }
  }


  // public formu_Facto (){
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

}
