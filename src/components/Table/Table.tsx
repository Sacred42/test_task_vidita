import { useMemo } from 'react';
import { Row, Block, Container } from './TableStyle';
import { CheckBox } from '../../ui/CheckBox/CheckBox';
import { useActivateData } from '../../hooks/useActivateData';
import { useGetData, useGetListOfChose } from '../../context/generalContext';
import { Search } from '../Search/Search';
export const Table = () => {
  const namesOfColumns = [
    'status',
    'sum',
    'qty',
    'volume',
    'name',
    'delivery_date',
    'currency',
    'total',
  ];
  const data = useGetData();
  const list = useGetListOfChose();
  console.log(list, 'list');
  const { handleActivate } = useActivateData();
  const compositionData = () => {
    return data.map((elem) => {
      return (
        <Row key={`${Object.values(elem)}nameOfRow`}>
          {Object.values(elem).map((val, i) => {
            if (Object.keys(elem)[i] === 'id') return;
            return <Block key={`${val}valueOfData`}>{val}</Block>;
          })}
          <Block>{`${elem.qty * elem.sum} ${elem.currency}`}</Block>
          <CheckBox checked={list.includes(elem.id)} id={elem.id} />
        </Row>
      );
    });
  };
  const newData = useMemo(() => compositionData(), [data.length, list.length]);

  return (
    <Container>
      <Row>
        <input onChange={handleActivate} type="checkbox" name="" id="" />
        {namesOfColumns.map((name) => (
          <div key={`${name}NameOfTable`}>
            <Search name={name} />
            <Block>{name}</Block>
          </div>
        ))}
      </Row>
      {newData}
    </Container>
  );
};
