export type ProductType = 'book' | 'video';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  type: ProductType;
  image: string;
  bgColor: string;
}