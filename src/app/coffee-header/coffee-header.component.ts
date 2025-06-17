import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-coffee-header',
  standalone: false,
  templateUrl: './coffee-header.component.html',
  styleUrl: './coffee-header.component.css'
})
export class CoffeeHeaderComponent {
  // @Output() toggle = new EventEmitter<void>()
  OnBar(){
    // this.toggle.emit()
  }
}
