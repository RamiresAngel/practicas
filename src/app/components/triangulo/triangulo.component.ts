import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styles: []
})
export class TrianguloComponent implements OnInit {

  public contador: number;
  public letra: string;
  public array_triangulo = new Array<string>();
  public letra_triangulo = '';
  constructor() { }

  ngOnInit() { }

  public dibujarTriangulo(): void {
    this.array_triangulo = [];
    let letra_triangulo = this.letra;
    for (let index = 0; index < this.contador; index++) {
      this.array_triangulo.push(letra_triangulo);
      letra_triangulo = letra_triangulo + this.letra;
    }
  }

}

