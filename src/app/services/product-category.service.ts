import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCategoryResponse } from '../common/product-category-response';
import { ProductResponse } from '../common/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  private baseUrl = environment.baseUrl;
  private apiEndPoint = '/category';

  constructor(private httpClient: HttpClient) {}

  getProductCategory(): Observable<ProductCategoryResponse> {
    return this.httpClient.get<ProductCategoryResponse>(
      this.baseUrl.concat(this.apiEndPoint)
    );
  }

  getProductByCategoryId(id: string): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      this.baseUrl.concat(this.apiEndPoint).concat('/' + id)
    );
  }
}
