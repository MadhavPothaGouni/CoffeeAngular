import { Component} from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-coffee-side-bar',
  standalone: false,
  templateUrl: './coffee-side-bar.component.html',
  styleUrl: './coffee-side-bar.component.css'
})
export class CoffeeSideBarComponent{
  constructor(private authservice : AuthserviceService){}

  logoutbutton(){
    this.authservice.logout()
  }
}
