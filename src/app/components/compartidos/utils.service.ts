import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private _http: HttpClient
  ) { }

  getRickMorty() {
    return this._http.get('https://rickandmortyapi.com/api/character');
  }

}
