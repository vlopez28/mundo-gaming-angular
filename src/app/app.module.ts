import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameCartComponent } from './game-cart/game-cart.component';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameOffersComponent } from './game-offers/game-offers.component';
import { GameLogInComponent } from './game-log-in/game-log-in.component';
import { GameSignInComponent } from './game-sign-in/game-sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCartComponent,
    GameHomeComponent,
    GameOffersComponent,
    GameLogInComponent,
    GameSignInComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
