import { Reducer, useReducer } from 'react';
import { Data, GeneralActions, GeneralState } from '../types/types';
import { createContainer } from 'react-tracked';
import { reducer } from './generalActions';

export const state = {
  data: [] as Data[],
  modalIsOpen: false,
  listOfChosen: [] as string[],
};

const useGeneralState = () =>
  useReducer<Reducer<GeneralState, GeneralActions>>(reducer, state);

export const {
  useUpdate: useDispatch,
  Provider,
  useSelector,
} = createContainer(useGeneralState);

export const useGetData = () => useSelector((state) => state.data);

export const useGetListOfChose = () =>
  useSelector((state) => state.listOfChosen);

export const useGetStatusModal = () =>
  useSelector((state) => state.modalIsOpen);
