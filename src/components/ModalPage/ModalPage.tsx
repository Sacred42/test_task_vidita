import React from 'react';
import { Container, ContainerForBtn } from './ModalPageStyle';
import { useGetData, useGetListOfChose } from '../../context/generalContext';
import { useCloseModal } from '../../hooks/useCloseModal';
import { useDispatch } from '../../context/generalContext';
import { actions } from '../../context/generalActions';
export const ModalPage = () => {
  const data = useGetData();
  const dispatch = useDispatch();
  const { setData } = actions;
  const list = useGetListOfChose();
  const { closeModal } = useCloseModal();
  const getNameOflist = () => {
    return data.reduce((acc, elem) => {
      if (list.includes(elem.id)) {
        return (acc += elem.name + ' ');
      }
      return acc;
    }, '');
  };
  const removeProducts = () => {
    return data.filter((elem) => !list.includes(elem.id));
    closeModal();
  };

  const names = getNameOflist();
  return (
    <Container>
      <div>Вы уверены что хотите аннулировать товар(ы): {names}</div>
      <ContainerForBtn>
        <button onClick={() => dispatch(setData(removeProducts()))}>
          Подтвердить
        </button>
        <button onClick={closeModal}>Отказать</button>
      </ContainerForBtn>
    </Container>
  );
};
