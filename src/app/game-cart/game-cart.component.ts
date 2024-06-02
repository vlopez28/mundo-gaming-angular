import { Component } from '@angular/core';
import { Game } from '../game-list/Game';
import { GameCartService } from '../game-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrl: './game-cart.component.scss'
})
export class GameCartComponent {
  //en el template "me suscribo"
  cartList$: Observable<Game[]>;
  totalCart$: Observable<number>;
  isPopupOpen: boolean = false;

  constructor(private gameService: GameCartService){
    //convierte el subject en observable de solo lectura
    this.cartList$ = gameService.cartList.asObservable();
    this.totalCart$ = gameService.totalCart.asObservable();
  }

  
  removeCart(game: Game){
    this.gameService.removeToCart(game);
  }
 
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  getClass(value: boolean):{}{
    return {
      'popup': true,
      'close': value,
    };
  }

  finalBuy(): void{
    this.gameService.finalToBuy();
    this.isPopupOpen = !this.isPopupOpen;
  }
 

}
