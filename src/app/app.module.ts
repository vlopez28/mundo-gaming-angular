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
import { ServerModule } from '@angular/platform-server';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCartComponent,
    GameHomeComponent,
    GameOffersComponent,
    GameLogInComponent,
    GameSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
