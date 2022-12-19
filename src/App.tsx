import { useEffect } from 'react';
import { BtnDelete } from './ui/BtnDelete/BtnDelete';
import './App.css';
import { Table } from './components/Table/Table';
import { mockData } from './services/data';
import { useDispatch } from './context/generalContext';
import { actions } from './context/generalActions';
import { Footer } from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { setData } = actions;
  useEffect(() => {
    dispatch(setData(mockData));
  }, []);
  return (
    <div className="App">
      <Table />
      <Footer />
      <BtnDelete />
    </div>
  );
}

export default App;
