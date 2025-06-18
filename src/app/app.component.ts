import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSidebarOpen = true;
  isRightBar = false;
  isRightSidebarOpen = false;
  issecondSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  ForRigthSideBar() {
    this.isRightBar = !this.isRightBar;
  }
  closeRightBar() {
    this.isRightBar = false;
  }
  openRightSidebar() {
    this.isRightSidebarOpen = true;
  }
  closeRightSidebar() {
    this.isRightSidebarOpen = false;
  }
  ForSecondRigthSide(){
    this.issecondSidebarOpen = !this.issecondSidebarOpen
  }
  forSecondright(){
    this.issecondSidebarOpen = false;
  }
}
