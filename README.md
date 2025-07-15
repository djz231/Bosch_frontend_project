Mini E-commerce Frontend (Angular)
Project Overview
A responsive e-commerce frontend application built with Angular CLI 18.2.5 that allows users to:

Browse products in grid/list views

View detailed product information

Search and sort products

Manage a persistent shopping cart

Development Setup
Prerequisites
Node.js (v18+ recommended)

Angular CLI (npm install -g @angular/cli)

Installation
Clone the repository:

bash
git clone [repository-url]
cd project-directory
Install dependencies:

bash
npm install
Development Server
Run:

bash
ng serve
Navigate to http://localhost:4200/. The app will automatically reload on changes.

Project Structure
text
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── models/           # TypeScript interfaces
│   ├── pages/            # Main views
│   ├── pipes/            # Custom pipes
│   ├── services/         # Business logic
│   ├── app.component.ts  # Root component
│   └── routes.ts         # Routing configuration
├── assets/
│   ├── images/           # Product images
│   └── products.json     # Mock product data
Key Features
Product Catalog

Grid/List view toggle

Search with 300ms debounce

Sorting (price high-low, name A-Z)

Pagination (5-20 items per page)

Shopping Cart

Add/remove items

Quantity adjustment

localStorage persistence

Real-time total calculation

Responsive Design

Mobile-first approach

Adaptive layouts for all screen sizes
