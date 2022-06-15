import { ProductCategory } from './product-category';

export interface ProductCategoryResponse {
  productCategory: ProductCategory[];
  total: number;
}
