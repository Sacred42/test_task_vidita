import { Data } from '../types/types';
export const searchData = (data: Data[], text: string) => {
  return data.filter((elem) =>
    Object.values(elem).some((str) => !String(str).indexOf(text)),
  );
};
