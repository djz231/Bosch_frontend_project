
# Bosch E-commerce Frontend (Angular)

## Project Overview
A responsive e-commerce frontend application built with Angular CLI 18.2.5 that allows users to:
- Browse products in grid/list views
- View detailed product information
- Search and sort products
- Manage a persistent shopping cart

## Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/djz231/Bosch_frontend_project.git
cd Bosch_frontend_project
Install dependencies:

bash
npm install
Development Server
Run the development server:

bash
ng serve
Navigate to http://localhost:4200/. The app will automatically reload on changes.

Project Structure
text
src/
├── app/
│   ├── components/       # Reusable UI components (product-card, cart-item, etc.)
│   ├── models/           # TypeScript interfaces (Product, CartItem, etc.)
│   ├── pages/            # Main views (Home, ProductDetail, Cart)
│   ├── pipes/            # Custom pipes (priceFormat, searchFilter)
│   ├── services/         # Business logic (ProductService, CartService)
│   ├── app.component.ts  # Root component
│   └── routes.ts         # Routing configuration
├── assets/
│   ├── images/           # Product images
│   └── products.json     # Mock product data
├── styles/               # Global styles
└── environments/         # Environment configurations
Key Features
Product Catalog
Grid/List view toggle

Search with 300ms debounce

Sorting options (price high-low, name A-Z)

Pagination (5-20 items per page)

Shopping Cart
Add/remove items

Quantity adjustment

localStorage persistence

Real-time total calculation

Responsive Design
Mobile-first approach

Adaptive layouts for all screen sizes

Cross-browser compatibility

Additional Scripts
Build for production: ng build --configuration production

Run tests: ng test

Lint code: ng lint

Dependencies
Angular Material (for UI components)

RxJS (for state management)

ngx-toastr (for notifications)
