import { Data } from '../types/types';

export const sortDate = (arr: Data[]) => {
  return arr.sort(
    (a, b) =>
      new Date(a.delivery_date).getTime() - new Date(b.delivery_date).getTime(),
  );
};
