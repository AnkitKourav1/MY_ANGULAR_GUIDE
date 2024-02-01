import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productId: string = ''; // Option 1: Initialize directly

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route parameters
    this.productId = this.route.snapshot.paramMap.get('id') || ''; // Ensure a default value
  }

}
