import { Component, OnInit } from '@angular/core';
import { ProductCategoryResponse } from 'src/app/common/product-category-response';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css'],
})
export class ProductCategoryMenuComponent implements OnInit {
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
