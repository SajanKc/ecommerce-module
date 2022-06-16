import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../common/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.baseUrl;
  private apiEndPoint = '/products';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      this.baseUrl.concat(this.apiEndPoint)
    );
  }

  getSearchProduct(value: string): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      this.baseUrl.concat(this.apiEndPoint).concat(`/search?q=${value}`)
    );
  }
}
