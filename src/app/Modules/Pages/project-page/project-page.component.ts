import { Component, OnInit } from '@angular/core';
import { ProjectSendService } from '../../project-send.service';


@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {
  project:any;
  constructor(private service:ProjectSendService){

  }
  ngOnInit(): void {
    this.service.clickProject.subscribe(res=>{
      console.log(res);
      this.project=res;
    })
  }


}
