import { useEffect, useState } from 'react';
import { mockData } from '../../services/data';
import { SearchPanel } from './SearchStyle';
import { useDispatch } from '../../context/generalContext';
import { actions } from '../../context/generalActions';
import { Data } from '../../types/types';
export const Search = () => {
  const dispatch = useDispatch();
  const { setData } = actions;
  const [text, setText] = useState<string>('');
  useEffect(() => {
    dispatch(setData(searchData(mockData)));
  }, [text]);
  const searchData = (data: Data[]) => {
    return data.filter((elem) =>
      Object.values(elem).some((str) => !String(str).indexOf(text)),
    );
  };
  return (
    <div>
      <SearchPanel
        onChange={(e) => setText(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};
