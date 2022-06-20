import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';
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

  getPaginatedProductList(
    page: string,
    size: string
  ): Observable<ProductResponse> {
    let params = new HttpParams();
    if (page != null && size != null) {
      params = params.append('page', page);
      params = params.append('size', size);
    }
    return this.httpClient.get<ProductResponse>(
      this.baseUrl.concat(this.apiEndPoint),
      {
        params,
      }
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      this.baseUrl.concat(this.apiEndPoint).concat('/' + id)
    );
  }

  getSearchProduct(value: string): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      this.baseUrl.concat(this.apiEndPoint).concat(`/search?q=${value}`)
    );
  }
}
