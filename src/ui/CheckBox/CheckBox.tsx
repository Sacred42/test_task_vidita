import { useState, FC } from 'react';
import { CheckboxInput, Container } from './CheckBoxStyle';
import { actions } from '../../context/generalActions';
import { useGetListOfChose, useDispatch } from '../../context/generalContext';
import { addData, removeData } from '../../helper/updateData';
type PropsCheckBox = { id: string };
export const CheckBox: FC<PropsCheckBox> = ({ id }) => {
  const [check, setCheck] = useState<boolean>(false);
  const { setListOfChosen } = actions;
  const dispatch = useDispatch();
  const list = useGetListOfChose();
  const handleCheckBox = () => {
    let newList: string[];
    check ? (newList = removeData(list, id)) : (newList = addData(list, id));
    setCheck((prev) => !prev);
    dispatch(setListOfChosen(newList));
  };

  return (
    <Container>
      <CheckboxInput
        onChange={handleCheckBox}
        type="checkbox"
        name=""
        id={id}
      />
    </Container>
  );
};
