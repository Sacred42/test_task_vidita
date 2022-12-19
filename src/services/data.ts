import { sortDate } from '../helper/sortDate';
import { Data } from '../types/types';
export const mockData: Data[] = sortDate([
  {
    id: '1',

    status: 'active',

    sum: 120,

    qty: 2,

    volume: 5,

    name: 'cake',

    delivery_date: '12.02.16',

    currency: 'rub',
  },
  {
    id: '2',

    status: 'archive',

    sum: 130,

    qty: 3,

    volume: 7,

    name: 'orange',

    delivery_date: '11.03.21',

    currency: 'rub',
  },
  {
    id: '3',

    status: 'archive',

    sum: 332,

    qty: 1,

    volume: 13,

    name: 'apple',

    delivery_date: '03.09.10',

    currency: 'usd',
  },
  {
    id: '4',

    status: 'archive',

    sum: 180,

    qty: 2,

    volume: 6,

    name: 'pineapple',

    delivery_date: '05.09.12',

    currency: 'rub',
  },
  {
    id: '5',

    status: 'archive',

    sum: 100,

    qty: 3,

    volume: 6,

    name: 'carrot',

    delivery_date: '04.10.10',

    currency: 'usd',
  },
  {
    id: '6',

    status: 'active',

    sum: 180,

    qty: 3,

    volume: 6,

    name: 'lemon',

    delivery_date: '09.11.10',

    currency: 'usd',
  },
]);
