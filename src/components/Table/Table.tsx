import { Row, Block, Container } from './TableStyle';
import { CheckBox } from '../../ui/CheckBox/CheckBox';
import { useGetData } from '../../context/generalContext';
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
  const newData = data.map((elem) => (
    <Row key={`${Object.values(elem)}nameOfRow`}>
      {Object.values(elem).map((val, i) => {
        if (Object.keys(elem)[i] === 'id') return;
        return <Block key={`${val}valueOfData`}>{val}</Block>;
      })}
      <Block>{`${elem.qty * elem.sum} ${elem.currency}`}</Block>
      <CheckBox id={elem.id} />
    </Row>
  ));

  return (
    <Container>
      <Row>
        {namesOfColumns.map((name) => (
          <Block key={`${name}NameOfTable`}>{name}</Block>
        ))}
      </Row>
      {newData}
    </Container>
  );
};
