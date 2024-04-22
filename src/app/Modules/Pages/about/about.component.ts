import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  email:string="patelpratham298@gmail.com"
  constructor(){

  }
  downloadCv(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Pratham_Patel.pdf'); // Replace 'your-file.pdf' with the actual filename
    link.setAttribute('download', 'Pratham_Patel.pdf'); // Specify the filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
