import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from './game-cart.service';
import { GameUserService } from './service/game-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  userLoginOn: boolean = false;
  open: boolean = false;
  constructor(private gameService: GameCartService,private loginService: GameUserService){
  }
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      }
    })
    
  }
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe(); 
  }

  closeSession(){
    //this.userLoginOn = false;
    this.loginService.closeSession();
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
