import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryResponse } from 'src/app/common/product-category-response';
import { ProductResponse } from 'src/app/common/product-response';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productResponse = {} as ProductResponse;
  productCategoryResponse = {} as ProductCategoryResponse;

  id: string = '';
  hasCategoryId: boolean = false;

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.hasCategoryId = this.activatedRoute.snapshot.paramMap.has('id');

    if (this.hasCategoryId) {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id') || '';
        this.getProductByCategoryId(this.id);
      });
    } else {
      this.getAllProduct();
    }
  }

  getAllProduct() {
    this.productService.getProductList().subscribe((data) => {
      this.productResponse = data;
    });
  }

  getProductByCategoryId(id: string) {
    this.productCategoryService.getProductByCategoryId(id).subscribe((data) => {
      this.productResponse = data;
    });
  }
}
