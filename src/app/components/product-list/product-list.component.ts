import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/common/ProductResponse';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productResponse = {} as ProductResponse;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getProductList().subscribe((data) => {
      this.productResponse = data;
    });
  }
}
