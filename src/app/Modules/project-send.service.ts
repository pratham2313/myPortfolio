import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectSendService {
  private project = new BehaviorSubject("");
  public clickProject=this.project.asObservable();

  sendData(data:any){
    this.project.next(data);
  }

  constructor() { }
}
