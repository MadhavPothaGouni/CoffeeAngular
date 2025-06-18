import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  standalone: false,
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.css'
})
export class RightSideBarComponent {
  @Output() onclosebutton = new EventEmitter<void>()
  onClose(){
    this.onclosebutton.emit();
  }
}
