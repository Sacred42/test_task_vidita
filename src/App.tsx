import React, { useEffect, useCallback } from 'react';
import { Modal } from './ui/Modal/Modal';
import './App.css';
import { Table } from './components/Table/Table';
import { mockData } from './services/data';
import { Search } from './components/Search/Search';
import { useDispatch, useGetStatusModal } from './context/generalContext';
import { actions } from './context/generalActions';
import { Footer } from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const modalStatus = useGetStatusModal();
  const { setData, setStatusModal } = actions;
  useEffect(() => {
    dispatch(setData(mockData));
  }, []);
  const openModal = () => {
    dispatch(setStatusModal(true));
  };
  return (
    <div className="App">
      <Search />
      <Table />
      <Footer />
      {modalStatus && <Modal />}
      <button onClick={openModal}>анулировать</button>
    </div>
  );
}

export default App;
