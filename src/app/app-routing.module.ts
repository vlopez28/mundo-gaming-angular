import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameOffersComponent } from './game-offers/game-offers.component';
import { GameLogInComponent } from './game-log-in/game-log-in.component';
import { GameSignInComponent } from './game-sign-in/game-sign-in.component';

const routes: Routes = [
  {path:'', redirectTo: 'games', pathMatch: 'full'},
  {path:'games', component: GameHomeComponent},
  {path:'offers', component: GameOffersComponent},
  {path:'log-in', component: GameLogInComponent},
  {path:'sign-in', component: GameSignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
