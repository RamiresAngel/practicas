import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../compartidos/utils.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {

  constructor(
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.getRickMorty();
  }

  getRickMorty() {
    this._utilsService.getRickMorty().subscribe(
      (data: any) => {
        console.log(data.results);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
