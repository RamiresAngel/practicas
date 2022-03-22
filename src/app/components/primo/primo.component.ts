import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {
  public primo: number;
  public array_pri = new Array<number>();
  public index: number;


  constructor() { }

  ngOnInit() { }

  public primoNumf() {
    this.array_pri = [];
    for ( this.index = this.primo; this.index > 1; this.index--) {
      if ( ( (this.index % 2 === 0) || (this.index % 3 === 0) || ( this.index % 5 === 0 ) || ( this.index % 7 === 0 ) )
          &&
          ( this.index !== 7 && this.index !== 5 && this.index !== 3 && this.index !== 2 )  ) {
        console.log(`El número ${this.index} no es primo`);
      } else {
        this.array_pri.push(this.index)
        console.log(this.index);
      }
    }
  }
}
