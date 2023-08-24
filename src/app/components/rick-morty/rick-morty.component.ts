import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../compartidos/utils.service';
import { Results } from '../compartidos/entidades/character';
declare var $: any;
@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {

  public personages = new Array<Results>();
  public filtro = '';
  public filtroPersonaje = new Array<Results>();
  public filtroEspecie = new Array<Results>();
  public especie = '';
  public especies: string[];
  public personaje: Results;

  constructor(
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.getRickMorty();
  }

  getRickMorty() {
    this._utilsService.getRickMorty().subscribe(
      (data: any) => {
        this.personages = data.results;
        this.especies = this.personages.map(
          (item) => { return item.species; }
        ).filter(
          (value, index, self) => { return self.indexOf(value) === index; }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  verDetalle(id: Results) {
    this.personaje = id;
    $('#exampleModal').modal('toggle');
  }

  filtrarPersonaje() {
    this.filtroPersonaje = this.personages.filter(
      (item) => {
        return item.name.toLowerCase().includes(this.filtro.toLowerCase());
      }
    );
    this.filtroEspecie = [];

  }

  filtrarEspecie() {
    this.filtroEspecie = this.personages.filter(
      (item) => {
        return item.species.toLowerCase().includes(this.especie.toLowerCase());
      }
    );
    this.filtroPersonaje = [];
    this.filtro = '';
  }

}
