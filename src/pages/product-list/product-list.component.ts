import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductDataService } from '../../services/product-data.service';
import { SortProductsPipe } from '../../pipes/sort-products.pipe';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductCardComponent, SortProductsPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  viewMode: 'grid' | 'list' = 'grid';
  searchTerm: string = '';
  sortBy: string = 'name-asc';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  isLoading: boolean = true;

  constructor(
    private productService: ProductDataService,
    private cartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.products = this.productService.getAllProducts();
    this.applyFilters();
    this.isLoading = false;
  }

  applyFilters(): void {
    if (this.searchTerm) {
      this.filteredProducts = this.productService.searchProducts(this.searchTerm);
    } else {
      this.filteredProducts = [...this.products];
    }

    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Add this method for pagination numbers
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    // Adjust startPage if we're at the end
    startPage = Math.max(1, endPage - maxVisiblePages + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Add this method to handle adding to cart
  addToCart(product: Product, quantity: number): void {
    this.cartService.addToCart(product, quantity);
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  changeItemsPerPage(): void {
    this.currentPage = 1;
    this.applyFilters();
  }
}