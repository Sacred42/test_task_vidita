import { useMemo } from 'react';
import { Row, Block, Container } from './TableStyle';
import { useActivateData } from '../../hooks/useActivateData';
import { ContainerInput } from '../../ui/CheckBox/CheckBoxStyle';
import { useGetData, useGetListOfChose } from '../../context/generalContext';
import { Search } from '../Search/Search';
import { useHandleCbData } from '../../hooks/useHandleCbData';
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
  const { handleCheckBox } = useHandleCbData();
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
          <ContainerInput>
            <input
              onChange={() => handleCheckBox(list.includes(elem.id), elem.id)}
              checked={list.includes(elem.id)}
              type="checkbox"
              name=""
              id={elem.id}
            />
          </ContainerInput>
        </Row>
      );
    });
  };
  const newData = useMemo(() => compositionData(), [data.length, list.length]);

  return (
    <Container>
      <ContainerInput top={'35px'}>
        <input onChange={handleActivate} type="checkbox" name="" id="" />
      </ContainerInput>
      <Row>
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
