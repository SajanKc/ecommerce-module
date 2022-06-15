import { Component } from '@angular/core';
import { ProductCategoryResponse } from './common/product-category-response';
import { ProductCategoryService } from './services/product-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-module';
  productCategoryResponse = {} as ProductCategoryResponse;

  constructor(private productCategoryService: ProductCategoryService) {}

  ngOnInit(): void {
    this.getProductCategory();
  }

  getProductCategory() {
    this.productCategoryService.getProductCategory().subscribe((data) => {
      this.productCategoryResponse = data;
    });
  }
}
