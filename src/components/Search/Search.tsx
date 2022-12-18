import { useEffect, useState, useRef } from 'react';
import { mockData } from '../../services/data';
import { SearchPanel } from './SearchStyle';
import { useDispatch } from '../../context/generalContext';
import { actions } from '../../context/generalActions';
import { searchData } from '../../helper/serchData';
import { Data } from '../../types/types';
export const Search = () => {
  const dispatch = useDispatch();
  const { setData } = actions;
  const initialData = useRef<Data[]>([]);
  const [text, setText] = useState<string>('');
  useEffect(() => {
    initialData.current = mockData;
  }, []);
  useEffect(() => {
    dispatch(setData(searchData(initialData.current, text)));
  }, [text]);
  return (
    <div>
      <SearchPanel
        onChange={(e) => setText(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};
