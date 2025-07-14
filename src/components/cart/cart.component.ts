import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: ShoppingCartService) {}

  updateQuantity(item: CartItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value);
    if (!isNaN(quantity) && quantity > 0) {
      this.cartService.updateQuantity(item.product.id, quantity);
    }
  }
}