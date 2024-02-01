import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { FormsModule } from '@angular/forms';

import {OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  template: `
    <div>
      <h2>Component Two</h2>
      <p>Shared Data: {{ sharedData }}</p>
    </div>
  `,
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent implements OnInit {
  sharedData: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sharedData = this.dataService.getSharedData();
    console.log(this.sharedData);
    this.dataService.data$.subscribe((sharedData) => {
      this.sharedData = sharedData;
    });
    
    
  }
}

