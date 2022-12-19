import {
  SET_DATA,
  SET_LIST_OF_CHOSE,
  REMOVE_LIST_OF_CHOSE,
  SET_STATUS_MODAL,
  SET_FILTER,
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
  removeListOfChosen: (payload: number) =>
    ({
      type: REMOVE_LIST_OF_CHOSE,
      payload,
    } as const),
  setStatusModal: (payload: boolean) =>
    ({
      type: SET_STATUS_MODAL,
      payload,
    } as const),
  setFilter: (payload: Partial<Data>) =>
    ({
      type: SET_FILTER,
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
    case REMOVE_LIST_OF_CHOSE: {
      return {
        ...state,
        listOfChosen: [],
        isRemoved: action.payload,
      };
    }
    case SET_STATUS_MODAL: {
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filterOfSearch: { ...state.filterOfSearch, ...action.payload },
      };
    }
    default:
      return state;
  }
};
