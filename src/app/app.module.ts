import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeSideBarComponent } from './coffee-side-bar/coffee-side-bar.component';
import { DashBoardComponent } from './coffee-side-bar/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeHeaderComponent,
    CoffeeSideBarComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
