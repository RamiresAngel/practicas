import { Component, Input, OnInit } from '@angular/core';
import { Results } from '../entidades/character';
declare var $: any;

@Component({
  selector: 'app-modal-descripcion',
  templateUrl: './modal-descripcion.component.html',
  styleUrls: ['./modal-descripcion.component.css']
})
export class ModalDescripcionComponent implements OnInit {
  @Input() personaje: Results;

  constructor() {
    this.personaje = new Results();
  }

  ngOnInit() {
  }

  verDetalle() {
    $('#exampleModal').modal('toggle');
  }

  hiddenModal() {
    $('#exampleModal').modal('hide');
  }

}
