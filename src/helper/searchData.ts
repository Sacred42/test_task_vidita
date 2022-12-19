import { Data } from '../types/types';
import { getFieldOfObj } from './getFieldOfObj';
export const searchData = (data: Data[], obj: Partial<Data>) => {
  return data.filter((elem) => {
    const arrElem = getFieldOfObj(elem);
    const arrObj = getFieldOfObj(obj);
    return arrObj.every((str) => arrElem.some((str2) => !str2.indexOf(str)));
  });
};
