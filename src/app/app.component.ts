import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from './game-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mundo-gaming';
  
 //search$: Observable<string>;
  constructor(private gameService: GameCartService){
    //convierte el subject en observable de solo lectura
    //this.search$ = gameService.search.asObservable();
  }
  filter(event: Event){
    const inputElement = event.target as HTMLInputElement;
    const search: string = inputElement.value;
    this.gameService.filter(search);
  }

}
