import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Output() addToCart = new EventEmitter<{product: Product, quantity: number}>();
  
  quantity: number = 1;
  
  onAddToCart(): void {
    this.addToCart.emit({product: this.product, quantity: this.quantity});
    this.quantity = 1;
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/assets/images/default-product-image.png';
  }

  preventNegative(event: KeyboardEvent): void {
    if (event.key === '-' || event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
}