import { useEffect, useState, useRef, FC } from 'react';
import { mockData } from '../../services/data';
import { SearchPanel } from './SearchStyle';
import {
  useDispatch,
  useGetData,
  useGetRemovedCount,
} from '../../context/generalContext';
import { useGetFilterList } from '../../context/generalContext';
import { actions } from '../../context/generalActions';
import { searchData } from '../../helper/searchData';
import { Data } from '../../types/types';
import { useIsMount } from '../../hooks/useIsMount';
type PropsSearch = { name: string };
export const Search: FC<PropsSearch> = ({ name }) => {
  const dispatch = useDispatch();
  const data = useGetData();
  const isRemoved = useGetRemovedCount();
  const { setData, setFilter } = actions;
  const filters = useGetFilterList();
  const initialData = useRef<Data[]>([]);
  const [text, setText] = useState<string>('');
  const obj: Partial<Data> = { [`${name}`]: text };
  const isMount = useIsMount();
  useEffect(() => {
    initialData.current = data;
  }, [isRemoved]);
  useEffect(() => {
    initialData.current = mockData;
  }, []);
  useEffect(() => {
    if (!isMount) {
      dispatch(setFilter(obj));
    }
  }, [text]);
  useEffect(() => {
    if (Object.values(filters).length === 0) return;
    dispatch(setData(searchData(initialData.current, filters)));
  }, [filters]);
  return (
    <div>
      <SearchPanel
        onChange={(e) => setText(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};
