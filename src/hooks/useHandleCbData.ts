import { useState } from 'react';
import { useDispatch } from '../context/generalContext';
import { actions } from '../context/generalActions';
import { useGetListOfChose } from '../context/generalContext';
import { removeData, addData } from '../helper/updateData';
export const useHandleCbData = () => {
  const { setListOfChosen } = actions;
  const dispatch = useDispatch();
  const list = useGetListOfChose();
  const handleCheckBox = (check: boolean, id: string) => {
    let newList: string[];
    check ? (newList = removeData(list, id)) : (newList = addData(list, id));
    dispatch(setListOfChosen(newList));
  };
  return { handleCheckBox };
};
