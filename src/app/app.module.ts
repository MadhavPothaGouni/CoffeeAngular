import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeSideBarComponent } from './coffee-side-bar/coffee-side-bar.component';
import { DashBoardComponent } from './coffee-side-bar/dash-board/dash-board.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { SecondrightsidebarComponent } from './secondrightsidebar/secondrightsidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './coffee-side-bar/dash-board/general/general.component';
import { TechnicalComponent } from './coffee-side-bar/dash-board/technical/technical.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'coffeecloud',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashBoardComponent,
        children:[
          { 
            path: 'general',
            component: GeneralComponent
          },
          {
            path: 'technical',
            component: TechnicalComponent
          }
        ]
      }
    ]
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    CoffeeHeaderComponent,
    CoffeeSideBarComponent,
    DashBoardComponent,
    RightSideBarComponent,
    SecondrightsidebarComponent,
    GeneralComponent,
    TechnicalComponent,
    LoginComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
