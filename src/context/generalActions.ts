import {
  SET_DATA,
  SET_LIST_OF_CHOSE,
  SET_STATUS_MODAL,
} from '../constants/constants';
import { GeneralState, GeneralActions, Data } from '../types/types';

export const actions = {
  setData: (payload: Data[]) =>
    ({
      type: SET_DATA,
      payload,
    } as const),
  setListOfChosen: (payload: string[]) =>
    ({
      type: SET_LIST_OF_CHOSE,
      payload,
    } as const),
  setStatusModal: (payload: boolean) =>
    ({
      type: SET_STATUS_MODAL,
      payload,
    } as const),
};
export const reducer = (
  state: GeneralState,
  action: GeneralActions,
): GeneralState => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case SET_LIST_OF_CHOSE: {
      return {
        ...state,
        listOfChosen: [...action.payload],
      };
    }
    case SET_STATUS_MODAL: {
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    }
    default:
      return state;
  }
};
