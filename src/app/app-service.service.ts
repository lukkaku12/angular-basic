import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, Response } from './rickandmorty.interface';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  baseUrl:string = "https://rickandmortyapi.com/api/character";

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Response>(this.baseUrl).pipe(
      map((pepito) => pepito.results.map((element) => {
        return {
          name:element.name,
          status:element.status,
          gender:element.gender,
        }
      }))
    )
  }

}
