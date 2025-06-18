import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondrightsidebar',
  standalone: false,
  templateUrl: './secondrightsidebar.component.html',
  styleUrl: './secondrightsidebar.component.css'
})
export class SecondrightsidebarComponent {
  @Output() oncancel = new EventEmitter<void>()
  onCancel(){
    this.oncancel.emit()
  }
}
