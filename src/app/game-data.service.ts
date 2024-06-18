import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Game } from './game-list/Game'
//const URL = 'https://apimocha.com/mundogaming/api/games';
const URL = 'https://api.mockfly.dev/mocks/78ee371a-2383-4426-9611-e05c5b026eef/games';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {



  constructor(private http: HttpClient) { }
  //consumir api
  public getAll(): Observable<Game[]>{
    return this.http.get<Game[]>(URL);
  
  }

}
