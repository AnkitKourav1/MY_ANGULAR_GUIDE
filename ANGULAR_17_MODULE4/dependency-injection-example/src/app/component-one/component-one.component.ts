import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div>
    <h2>Component One</h2>
    <label>Data to share:</label>
    <input [(ngModel)]="sharedData" />

    
    <button (click)="shareData()">Share Data</button>
  </div>
`,  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {
  sharedData: string = '';

  constructor(private dataService: DataService) {}

  shareData(): void {
    this.dataService.setSharedData(this.sharedData);
  }
}
