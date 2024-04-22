import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  profileForm = new FormGroup({
    yourName: new FormControl(''),
    yourEmail: new FormControl(''),
    subject: new FormControl(''),
  });
  email="patelpratham298@gmail.com"
  constructor(){

  }

}
