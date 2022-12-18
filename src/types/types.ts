import { actions } from '../context/generalActions';
import { state } from '../context/generalContext';
export type Data = {
  id: string;

  status: 'active' | 'archive';

  sum: number;

  qty: number;

  volume: number;

  name: string;

  delivery_date: string;

  currency: string;
};

export type GeneralState = typeof state;

export type ActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type GeneralActions = ActionsTypes<typeof actions>;
