export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  technicalSpecifications: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}