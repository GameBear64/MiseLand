export interface IItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  sold: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
