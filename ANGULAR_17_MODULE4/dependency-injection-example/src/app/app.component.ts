import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentOneComponent,ComponentTwoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dependency-injection-example';
}
