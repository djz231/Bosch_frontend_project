import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sortProducts',
  standalone: true
})
export class SortProductsPipe implements PipeTransform {
  transform(products: Product[], sortBy: string): Product[] {
    if (!products || !sortBy) return products;

    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }
}