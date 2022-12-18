export const removeData = (data: string[], id: string) => {
  return data.filter((elem) => Number(elem) !== Number(id));
};

export const addData = (data: string[], id: string) => {
  return [id, ...data];
};
