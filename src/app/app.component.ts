import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from './game-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'mundo-gaming';
  open: boolean = false;
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

  toggleClass(){
    this.open = !this.open;
  }

  getClassMenu(): {}{
    let rdo:{} = {'menu-user': true};
      if(this.open){
      rdo = {
        'menu-user': true,
        'open': true,
      } 
    } 
    return rdo;
  }

}
