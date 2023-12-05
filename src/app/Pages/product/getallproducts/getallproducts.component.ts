import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-getallproducts',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getallproducts.component.html',
  styleUrl: './getallproducts.component.css'
})
export class GetallproductsComponent {
  products: Product[] = [];
  constructor(private http: HttpClient, private router: Router)
  {

    this.getAllProducts();
  }
  getAllProducts() 
  {
    this.http
    .get<Product[]>('http://localhost:5254/api/Product/GetAllProducts')
    .subscribe((response) => {
      this.products = response;
      console.log(this.products);
      this.getAllProducts();
    });

  }
}

