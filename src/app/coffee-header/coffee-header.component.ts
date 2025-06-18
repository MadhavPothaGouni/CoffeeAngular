import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-header',
  standalone: false,
  templateUrl: './coffee-header.component.html',
  styleUrl: './coffee-header.component.css'
})
export class CoffeeHeaderComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() openRight = new EventEmitter<void>();
  @Output() onpin = new EventEmitter<void>();
  OnBar(){
    this.toggle.emit()
  }
  OnFilter(){
    this.openRight.emit()
  }
  onPin(){
    this.onpin.emit();
  }
}
