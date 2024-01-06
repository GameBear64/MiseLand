import { ICartItem } from '@components/Items/slices/types';

export interface IUser {
  _id: string;
  name: string;
  role: string;
  cart: ICartItem[];
}
export interface IServerLoginResponse {
  user: IUser;
  token: string;
}

export interface ITheme {
  mode: 'light' | 'dark';
  color: 'orange' | 'red' | 'green' | 'blue' | 'violet' | 'pink';
}
