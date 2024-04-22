import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { projects } from '../../Data/projectData';
import { ProjectSendService } from '../../project-send.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = projects;

  
  constructor(private service:ProjectSendService,private router: Router){

  }
  onProjectClick(data:any){
    this.service.sendData(data);
    this.router.navigate(['/projectPage']);
  }

}
