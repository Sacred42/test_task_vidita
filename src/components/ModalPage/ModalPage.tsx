import { Container, ContainerForBtn } from './ModalPageStyle';
import { useGetData, useGetListOfChose } from '../../context/generalContext';
import { useCloseModal } from '../../hooks/useCloseModal';
import { useDispatch } from '../../context/generalContext';
import { actions } from '../../context/generalActions';
import { getNameOflist } from '../../helper/getNameOflList';
import { removeProducts } from '../../helper/removeProduct';
export const ModalPage = () => {
  const data = useGetData();
  const dispatch = useDispatch();
  const { setData, removeListOfChosen } = actions;
  const list = useGetListOfChose();
  const { closeModal } = useCloseModal();
  const removeAndClose = () => {
    dispatch(setData(removeProducts(data, list)));

    dispatch(removeListOfChosen(list.length));
    closeModal();
  };
  const names = getNameOflist(data, list);
  return (
    <Container>
      <div>Вы уверены что хотите аннулировать товар(ы):</div>
      <div>{names.slice(0, names.length - 2) + ';'}</div>
      <ContainerForBtn>
        <button onClick={removeAndClose}>Подтвердить</button>
        <button onClick={closeModal}>Отказать</button>
      </ContainerForBtn>
    </Container>
  );
};
