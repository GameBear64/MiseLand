import { IItem } from '@components/Items/slices/types';

export interface IResponse {
  _id: string;
  products: IItem[];
}
