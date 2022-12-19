import {
  useDispatch,
  useGetData,
  useGetListOfChose,
} from '../context/generalContext';
import { actions } from '../context/generalActions';

export const useActivateData = () => {
  const dispatch = useDispatch();
  const data = useGetData();
  const list = useGetListOfChose();
  const { activateAllData } = actions;
  const allIdData = data.map((elem) => elem.id);
  const handleActivate = () => {
    if (list.length === 0) dispatch(activateAllData(allIdData));
    else dispatch(activateAllData([]));
  };
  return { handleActivate };
};
