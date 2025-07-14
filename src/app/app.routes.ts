import { Routes } from '@angular/router';
import { ProductListComponent } from '../pages/product-list/product-list.component';
import { ProductDetailPageComponent } from '../pages/product-detail-page/product-detail-page.component';
import { CartComponent } from '../components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];