import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Game } from './game-list/Game'
const URL = 'https://api.mockfly.dev/mocks/cddadd67-897b-4d9d-afab-2a0adf7848ef/api/games';

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
