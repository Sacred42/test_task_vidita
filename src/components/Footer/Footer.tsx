import { Block, Container } from './FooterStyle';
import { useGetData } from '../../context/generalContext';
export const Footer = () => {
  const data = useGetData();
  const getAllVolume = data.reduce((acc, elem) => (acc += elem.volume), 0);
  const getAllQty = data.reduce((acc, elem) => (acc += elem.qty), 0);
  return (
    <Container>
      <Block>Volume:{getAllVolume}</Block>
      <Block>Qty:{getAllQty}</Block>
    </Container>
  );
};
