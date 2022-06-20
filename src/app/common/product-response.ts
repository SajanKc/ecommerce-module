import { Page } from './page';
import { Product } from './product';

export interface ProductResponse {
  products: Product[];
  page: Page;
  total: number;
}
