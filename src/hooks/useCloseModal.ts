import { useCallback } from 'react';
import { actions } from '../context/generalActions';
import { useDispatch } from '../context/generalContext';

export const useCloseModal = () => {
  const dispatch = useDispatch();
  const { setStatusModal } = actions;
  const closeModal = useCallback(() => {
    dispatch(setStatusModal(false));
  }, []);
  return { closeModal };
};
