import { Data } from '../types/types';
export const getNameOflist = (data: Data[], list: string[]) => {
  return data.reduce((acc, elem) => {
    if (list.includes(elem.id)) {
      return (acc += elem.name + ', ');
    }
    return acc;
  }, '');
};
