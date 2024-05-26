import { Component, OnInit } from '@angular/core';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit{
  games : Game[] =[{
    title: 'Stumble Guys',
    price_normal: 8990,
    price_off: 0,
    description: 'Juego multijugador masivo de grupos eliminación en grupo',
    image: '../../assets/image/home/stumble.png',
    type: 'exclusive'
  },
  {
    title: 'Super Mario Bross',
    price_normal: 12900,
    price_off: 0,
    description: 'Acompaña a Mario y Luigi en una nueva aventura, se enfrentarán con un',
    image: '../../assets/image/home/mario.jpeg',
    type: 'exclusive'
  },
  {
    title: 'Minecraft',
    price_normal: 25900,
    price_off: 0,
    description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
    image: '../../assets/image/home/minecraft.png',
    type: 'ya-es-tuyo'
  },
  {
    title: 'Minecraft2',
    price_normal: 18500,
    price_off: 0,
    description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
    image: '../../assets/image/home/minecraft.png',
    type: 'gratis'
  },
  {
    title: 'Minecraft3',
    price_normal: 25000,
    price_off: 20000,
    description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
    image: '../../assets/image/home/minecraft.png',
    type: 'off'
  },
  {
    title: 'Minecraft4',
    price_normal: 29000,
    price_off: 0,
    description: 'Videojuego tipo sandbox, podes modelar el mundo a tu gusto! tambien',
    image: '../../assets/image/home/minecraft.png',
    type: 'nuevo'
  },

] 

getClass(game: Game) {
  return {
    'card': true,
    'tag': true,
    [game.type]: true
  };
}
  constructor(){}

  ngOnInit(): void {
      
  }
}
