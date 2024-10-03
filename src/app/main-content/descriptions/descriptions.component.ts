import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-descriptions',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.scss'
})
export class DescriptionsComponent {

}
