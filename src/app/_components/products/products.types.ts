export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  [key: string]: unknown;
}
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  [key: string]: unknown;
}
