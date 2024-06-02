import { Component, OnInit } from '@angular/core';
import { Game } from './Game';
import { GameCartService } from '../game-cart.service';
import { of, Observable } from 'rxjs';
import { GameDataService } from '../game-data.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit{
  currentRating: number = 0;
  games$: Observable<Game[]>;
//  games: Game[]= [];
 // game$: Observable<Game>;
//   games : Game[] = [{
//     title: 'Stumble Guys',
//     price_normal: 8990,
//     price_off: 0,
//     description: 'Juego multijugador masivo de grupos eliminación en grupo',
//     image: '../../assets/image/home/stumble.png',
//     type: 'exclusive',
//     qualification: 0,
//     bought: false,
//   },
//   {
//     title: 'Minecraft',
//     price_normal: 25900,
//     price_off: 0,
//     description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
//     image: '../../assets/image/home/minecraft.png',
//     type: 'gratis',
//     qualification: 0,
//     bought: false,
//   },
//   {
//     title: 'Super Mario Bross',
//     price_normal: 12900,
//     price_off: 0,
//     description: 'Acompaña a Mario y Luigi en una nueva aventura, se enfrentarán con un',
//     image: '../../assets/image/home/mario.jpeg',
//     type: 'exclusive',
//     qualification: 0,
//     bought: false,
//   },
//   {
//     title: 'Fall Guys',
//     price_normal: 15000,
//     price_off: 12000,
//     description: 'Party royale gratis y multiplataforma donde los jugadores pueden elegir una',
//     image: '../../assets/image/home/FallGuys.webp',
//     type: 'nuevo',
//     qualification: 0,
//     bought: false,
//   },
//   {
//     title: 'Free Fire',
//     price_normal: 25000,
//     price_off: 20000,
//     description: 'Hasta 50 jugadores caen desde un paracaídas en una isla en busca de nuevos',
//     image: '../../assets/image/home/freeFire.jpg',
//     type: 'off',
//     qualification: 0,
//     bought: false,
//   },
//   {
//     title: 'Fornite',
//     price_normal: 29000,
//     price_off: 0,
//     description: 'Juego de batalla real, compiten hasta 100 players en solitario, dúos y equipos',
//     image: '../../assets/image/home/fornite.jpg',
//     type: 'ya-es-tuyo',
//     qualification: 0,
//     bought: false,
//   },
  
  

// ];
constructor(private gameCartService: GameCartService){
  this.games$ = gameCartService.games.asObservable();
  
 
  //this.games$ = gameCartService.games.asObservable();
}

  addCart(game: Game){
   // this.changeClass(game);
    this.gameCartService.addToCart(game);
  }

  ngOnInit(): void {
  }

//cambia clase del boton comprar(carrito)
getClassCart(game: Game){
  let rdo:{} = {'card-btn-buy': true};
  if(game.bought){
    rdo = {
      'card-btn-buy': false,
      'card-btn-buy-bought': true,
    } 
  } 
  return rdo;
}

//setea la propiedad comprado a true
changeClass(game: Game):void{
  //game.type = 'ya-es-tuyo'
  game.bought = true;
}

//setea calificacion segun id, segun estrella clickeada
changeQualification(event: any, game: Game): void {
  game.qualification = event.target.id;
}

//toggle de clases segun calificacion
getClassStar(rating: number, game: Game): string {
  return game.qualification >= rating ? 'filled' : 'empty';
}

//retorna la clase de card, segun tipo
getClass(game: Game):{} {
  return {
    'card': true,
    'tag': true,
    [game.type]: true
  };
}
  
}
