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
    console.log("holaaaa")
    return this.http.get<Game[]>(URL);
      //catchError(this.handleError)
  
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   // Puedes manejar el error aquí, por ejemplo, logueándolo
  //   console.error('Ocurrió un error:', error);

  //   // Devuelve un Observable con un valor predeterminado o lanza un nuevo error
  //   return throwError('Ocurrió un error al obtener los datos. Por favor, inténtalo de nuevo más tarde.');
  // }
}
