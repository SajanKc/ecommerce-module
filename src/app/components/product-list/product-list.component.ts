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
  searchQuery: string = '';
  hasCategoryId: boolean = false;
  hasSearchQuery: boolean = false;

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.hasCategoryId = this.activatedRoute.snapshot.paramMap.has('id');
    this.hasSearchQuery = this.activatedRoute.snapshot.queryParamMap.has('q');

    // filtering by category id
    if (this.hasCategoryId) {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.id = params.get('id') || '';
        this.getProductByCategoryId(this.id);
      });
      // filtering by search query
    } else if (this.hasSearchQuery) {
      this.activatedRoute.queryParamMap.subscribe((params) => {
        this.searchQuery = params.get('q') || '';
        this.getSearchedProduct(this.searchQuery);
      });
      // default
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

  getSearchedProduct(search: string) {
    this.productService.getSearchProduct(search).subscribe((data) => {
      this.productResponse = data;
    });
  }
}
