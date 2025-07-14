import { Injectable } from '@angular/core';
import { Product, CartItem } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private storageKey = 'ecommerce_cart';
  private cartItems: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem(this.storageKey);
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    
    this.saveCart();
  }

  updateQuantity(productId: string, quantity: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  removeItem(productId: string): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem(this.storageKey);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + (item.product.price * item.quantity), 0
    );
  }

  private saveCart(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }
}