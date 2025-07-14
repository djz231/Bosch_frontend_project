import { Injectable } from '@angular/core';
import productData from '../../public/assets/products.json';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private products: Product[] = productData.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    shortDescription: item.shortDescription,
    fullDescription: item.fullDescription,
    images: item.images, // Koristimo originalne putanje bez modifikacija
    technicalSpecifications: this.transformTechnicalSpecs(item.technicalSpecifications)
  }));

  private transformTechnicalSpecs(specs: any): Record<string, string> {
    const result: Record<string, string> = {};
    for (const key in specs) {
      if (specs.hasOwnProperty(key)) {
        result[key] = specs[key].toString();
      }
    }
    return result;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(searchTerm: string): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}