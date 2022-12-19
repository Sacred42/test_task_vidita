import { Data } from '../types/types';
export const getFieldOfObj = (obj: Partial<Data>) => {
  return Object.entries(obj).map((elem) => '' + elem[0] + elem[1]);
};
