import { sortDate } from '../helper/sortDate';
import { Data } from '../types/types';
export const mockData: Data[] = sortDate([
  {
    id: '1',

    status: 'active',

    sum: 120,

    qty: 2,

    volume: 5,

    name: 'hell',

    delivery_date: '12.02.16',

    currency: 'rub',
  },
  {
    id: '2',

    status: 'archive',

    sum: 130,

    qty: 3,

    volume: 7,

    name: 'yell',

    delivery_date: '11.03.21',

    currency: 'rub',
  },
  {
    id: '3',

    status: 'archive',

    sum: 160,

    qty: 1,

    volume: 6,

    name: 'htyn',

    delivery_date: '03.09.10',

    currency: 'usd',
  },
]);
