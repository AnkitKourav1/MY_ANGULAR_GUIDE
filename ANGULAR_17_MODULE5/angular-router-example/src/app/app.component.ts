import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NotFoundComponent,ProductComponent,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-example';
}
