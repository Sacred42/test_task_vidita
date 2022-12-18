import { Data } from '../types/types';
export const removeProducts = (data: Data[], list: string[]) => {
  return data.filter((elem) => !list.includes(elem.id));
};
