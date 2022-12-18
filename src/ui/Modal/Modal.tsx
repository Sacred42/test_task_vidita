import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Root, Wrapper } from './ModalStyle';
import ReactDOM from 'react-dom';
import { useCloseModal } from '../../hooks/useCloseModal';
import { ModalPage } from '../../components/ModalPage/ModalPage';

export const Modal = () => {
  const containerElementRef = useRef<HTMLElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isContainerReady, setIsContainerReady] = useState(false);
  const { closeModal } = useCloseModal();
  const escFunction = useCallback((event: any) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  }, []);
  useEffect(() => {
    containerElementRef.current = document.getElementById('portal');
    elementRef.current = document.createElement('div');
    if (containerElementRef.current) {
      containerElementRef.current.appendChild(elementRef.current);
      setIsContainerReady(true);
      document.addEventListener('keydown', escFunction, false);
    }
  }, []);

  const handleClosePortal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      closeModal();
    },
    [closeModal],
  );

  if (!isContainerReady) return null;
  return ReactDOM.createPortal(
    <Wrapper>
      {<ModalPage />}
      <Root onClick={handleClosePortal}></Root>
    </Wrapper>,
    elementRef.current as HTMLDivElement,
  );
};

export default Modal;
