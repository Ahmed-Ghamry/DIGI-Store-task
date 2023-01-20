import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private fakeApiURL: string = environment?.fakeApiURL;

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<Product[]>(`${this.fakeApiURL}/products?limit=10`);
  }

  public getProductDetails(productID: number) {
    return this.http.get<Product>(`${this.fakeApiURL}/products/${productID}`);
  }

  public getAllCategories() {
    return this.http.get<string[]>(`${this.fakeApiURL}/products/categories`);
  }

  public createNewProduct(productData: Product) {
    return this.http.post(`${this.fakeApiURL}/products`, productData);
  }
}
