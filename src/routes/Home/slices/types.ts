import { IItem } from '@components/Items/slices/types';

export interface IResponse {
  [key: string]: IItem[];
}
