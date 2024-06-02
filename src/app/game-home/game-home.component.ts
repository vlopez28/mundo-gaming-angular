import { Component } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Observable, map } from 'rxjs';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrl: './game-home.component.scss'
})
export class GameHomeComponent {
  
  cartList$: Observable<Game[]>;
  cartListIsEmpty$?: Observable<boolean>;

  constructor(private gameService: GameCartService){
    //convierte el subject en observable de solo lectura
    this.cartList$ = gameService.cartList.asObservable();
  }
  ngOnInit() {
    // Verifica si el carrito está vacío
    this.cartListIsEmpty$ = this.cartList$.pipe(
      map((games : Game[]) => games.length === 0)
    );
    console.log(this.cartListIsEmpty$)
    console.log("hola",this.cartList$)
  }
}
