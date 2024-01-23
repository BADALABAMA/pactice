import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productId: any;

  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getProductById(productId: number): Observable<any> {
    const productUrl = ` https://api.escuelajs.co/api/v1/products/${productId}`;
    this.productId = productId;
    return this.http.get(productUrl);
  }
  setProductId(productId: number) {}
}
