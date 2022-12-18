import {
  useGetListOfChose,
  useGetStatusModal,
} from '../../context/generalContext';
import { ButtonDelete } from './ButtonDeleteStyle';
import { actions } from '../../context/generalActions';
import { Modal } from '../../ui/Modal/Modal';
import { useDispatch } from '../../context/generalContext';

export const BtnDelete = () => {
  const list = useGetListOfChose();
  const modalStatus = useGetStatusModal();
  const dispatch = useDispatch();
  const { setStatusModal } = actions;
  const openModal = () => {
    list.length !== 0 && dispatch(setStatusModal(true));
  };
  return (
    <>
      {modalStatus && <Modal />}
      <ButtonDelete onClick={openModal}>анулировать</ButtonDelete>
    </>
  );
};
