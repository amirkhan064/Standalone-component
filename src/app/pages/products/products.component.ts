import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/rest-api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private ps: ProductsService) {}
  public products: any;
  ngOnInit(): void {
    this.ps.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
