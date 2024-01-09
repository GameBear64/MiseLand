import { IUser } from '@utils/types';

export interface IItem {
  _id: string;
  title: string;
  author: IUser;
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

export interface ICartItem {
  product: IItem;
  quantity: number;
}

export interface IOrder {
  _id: string;
  author?: {
    _id: string;
    name: string;
  };
  product: IItem;
  quantity: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
