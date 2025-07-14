import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  currentImageIndex: number = 0;
  isLoading: boolean = true;
  defaultImage: string = '/assets/images/default-product-image.png';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDataService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productService.getProductById(productId);
      if (!this.product) {
        // Handle 404 - product not found
      }
    }
    this.isLoading = false;
  }

  getSpecsArray(specs: Record<string, string>): {key: string, value: string}[] {
    return Object.keys(specs).map(key => ({
      key,
      value: specs[key]
    }));
  }

  changeImage(index: number): void {
    this.currentImageIndex = index;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      this.quantity = 1;
    }
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
  }

  preventNegative(event: KeyboardEvent): void {
    if (event.key === '-' || event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
}