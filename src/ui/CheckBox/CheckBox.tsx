import { useState, FC } from 'react';
import { CheckboxInput, Container } from './CheckBoxStyle';
import { actions } from '../../context/generalActions';
import { useGetListOfChose, useDispatch } from '../../context/generalContext';
import { addData, removeData } from '../../helper/updateData';
type PropsCheckBox = { id: string; checked: boolean };
export const CheckBox: FC<PropsCheckBox> = ({ id, checked }) => {
  const { setListOfChosen } = actions;
  const dispatch = useDispatch();
  const list = useGetListOfChose();
  const handleCheckBox = () => {
    let newList: string[];
    checked ? (newList = removeData(list, id)) : (newList = addData(list, id));
    dispatch(setListOfChosen(newList));
  };

  return (
    <Container>
      <CheckboxInput
        checked={checked}
        onChange={handleCheckBox}
        type="checkbox"
        name=""
        id={id}
      />
    </Container>
  );
};
