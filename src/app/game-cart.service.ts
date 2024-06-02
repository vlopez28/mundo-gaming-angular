import { Injectable, OnInit } from '@angular/core';
import { Game } from './game-list/Game';
import { BehaviorSubject } from 'rxjs';
import { GameDataService } from './game-data.service';

@Injectable({
  providedIn: 'root'
})
export class GameCartService implements OnInit {
 /*behavior subject:  mantiene el valor más reciente y lo emite 
  /a los nuevos suscriptores cuando se suscriben.
  */
  private _cartList: Game[] = [];
  cartList: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  private _totalCart: number = 0;
  totalCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _games: Game[] = [];
  games: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);
  
  //esta bien inicializar los juegos aqui en el service y no en el game-list-component
  constructor(private gameDataService: GameDataService) {   
    this.gameDataService.getAll().subscribe(games => this._games = games); 
    // this._games =[
      // {
      //   title: 'Stumble Guys',
      //   price_normal: 8990,
      //   price_off: 0,
      //   description: 'Juego multijugador masivo de grupos eliminación en grupo',
      //   image: '../../assets/image/home/stumble.png',
      //   type: 'exclusive',
      //   qualification: 0,
      //   bought: false,
      // },
      // {
      //   title: 'Minecraft',
      //   price_normal: 25900,
      //   price_off: 0,
      //   description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
      //   image: '../../assets/image/home/minecraft.png',
      //   type: 'gratis',
      //   qualification: 0,
      //   bought: false,
      // },
      // {
      //   title: 'Super Mario Bross',
      //   price_normal: 12900,
      //   price_off: 0,
      //   description: 'Acompaña a Mario y Luigi en una nueva aventura, se enfrentarán con un',
      //   image: '../../assets/image/home/mario.jpeg',
      //   type: 'exclusive',
      //   qualification: 0,
      //   bought: false,
      // },
      // {
      //   title: 'Fall Guys',
      //   price_normal: 15000,
      //   price_off: 12000,
      //   description: 'Party royale gratis y multiplataforma donde los jugadores pueden elegir una',
      //   image: '../../assets/image/home/FallGuys.webp',
      //   type: 'nuevo',
      //   qualification: 0,
      //   bought: false,
      // },
      // {
      //   title: 'Free Fire',
      //   price_normal: 25000,
      //   price_off: 20000,
      //   description: 'Hasta 50 jugadores caen desde un paracaídas en una isla en busca de nuevos',
      //   image: '../../assets/image/home/freeFire.jpg',
      //   type: 'off',
      //   qualification: 0,
      //   bought: false,
      // },
      // {
      //   title: 'Fornite',
      //   price_normal: 29000,
      //   price_off: 0,
      //   description: 'Juego de batalla real, compiten hasta 100 players en solitario, dúos y equipos',
      //   image: '../../assets/image/home/fornite.jpg',
      //   type: 'ya-es-tuyo',
      //   qualification: 0,
      //   bought: false,
      // }
    // ];
    this.games.next(this._games);
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   finalToBuy(): void{
   //vaciar el carrito
    //cerrar pop up
    this._cartList.forEach(e => {
      const gameIndex = this._games.findIndex(g => g.title === e.title);
      if (gameIndex !== -1) {
        this._games[gameIndex].bought = false;
        this._games[gameIndex].type = 'ya-es-tuyo';
        this.games.next([...this._games]); // Emitir una copia de la lista actualizada
      }
      });
      this._cartList = [];
      this.cartList.next(this._cartList);
      this._totalCart = 0;
      this.totalCart.next(this._totalCart);
    console.log(this._cartList);
   }

  removeToCart(game: Game){
    this._cartList = this._cartList.filter(i => i.title != game.title);
    this.sumTotalCart();
    /*next: emite nuevo valor a todos los suscriptores del behavior subjects
    /todos los observadores recibiran el nuevo valor
    */
    this.cartList.next(this._cartList);
    //cambio estado a no comprado
    const gameIndex = this._games.findIndex(g => g.title === game.title);
    if (gameIndex !== -1) {
      this._games[gameIndex].bought = false;
      this.games.next([...this._games]); // Emitir una copia de la lista actualizada
    }
  }

  addToCart(game: Game): void{
   let item: Game | undefined = this._cartList.find((v1) => v1.title == game.title);
    if(!item){
      this._cartList.push({... game});
    }
    this.sumTotalCart();
    game.bought = true;
    console.log(game);
    this.cartList.next(this._cartList) 
  }
  sumTotalCart(): void{
    let price = 0;
    this._cartList.forEach(e => {
      if(e.type == 'gratis'){
        price+=0;
      } else if(e.type == 'off'){
        price+=e.price_off
      } else {
        price+=e.price_normal;
      }
    });
    this._totalCart = price;
    this.totalCart.next(this._totalCart);
  }
}
