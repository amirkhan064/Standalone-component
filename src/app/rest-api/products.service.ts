import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private host: string = 'https://fakestoreapi.com';

  getProducts() {
    return this.http.get(`${this.host}/products`);
  }
}
