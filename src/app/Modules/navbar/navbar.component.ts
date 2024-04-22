import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // toggleSidebar() {
  //   var nav = document.querySelector('.absolute');
  //   nav?.classList.toggle('-translate-x-full');
  // }
  call() {
    console.log("clicked");
  }
}
