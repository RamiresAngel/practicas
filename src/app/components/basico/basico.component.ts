import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {
  // convertir de libras a kilos
  public libra_t: number;
  public convercion_k: number

  // convertir de kilómetros a milla
  public kilometro_t
  public convercion_m

  constructor() { }

  Convertir() {
    this.convercion_k = this.libra_t / 2.2046;
    this.convercion_k *= 100;
    this.convercion_k = Math.round(this.convercion_k);
    this.convercion_k /= 100;
  }

  Convertir_milla() {
    this.convercion_m = this.kilometro_t * 0.62137;
    this.convercion_m *= 100;
    this.convercion_m = Math.round(this.convercion_m);
    this.convercion_m /= 100;
  }

}
