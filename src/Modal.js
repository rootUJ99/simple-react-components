import React, {useState} from 'react';
import styled from 'styled-components';
import {Overlay} from './CommonStyles';

const ModalWrapper = styled.div`
  position: absolute;
  display: grid;
  place-content: center center;
  background: red;
  width : 12rem;
  height: 12rem;
`;

const Modal = (props) => {
  const [toggleModal, setToggleModal]=useState(false);
  return (
    <div>
      <button onClick={()=>{setToggleModal(!toggleModal)}}>
        click here
      </button>
      {toggleModal && <Overlay>
        <ModalWrapper>
          yes
        </ModalWrapper>
      </Overlay>}
    </div>
  )
}

export default Modal;