import { Component } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  standalone: false,
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {
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
