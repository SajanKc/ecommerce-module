import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  productId: number = 0;

  imageLink: string = 'https://picsum.photos/500/400?random';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
    });

    this.handleProductDetails(this.productId);
  }

  handleProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe((respnose) => {
      this.product = respnose;
    });
  }
}
