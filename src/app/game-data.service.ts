import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Game } from './game-list/Game'
const URL = 'https://api.mockfly.dev/mocks/ab7b15ac-be18-472c-9f05-df668d1fa8c9/api/games';

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
