export type Category =
  | "Designer"
  | "Aroma"
  | "Flower"
  | "Couple"
  | "Laddoo"
  | "Festive"
  | "Customized";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
