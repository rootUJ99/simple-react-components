import React, {useState} from 'react';
import styled from 'styled-components';
import {Overlay} from './CommonStyles';

const Container = styled.div`
  position: relative;
  height: inherit;
`;

const DrawwerWrapper = styled.aside`
  position: absolute;
  height: 100%;
  width: 17rem;
  background: #3696e8;
  left: 0;
  top: 0;
  z-index: 1000;
  animation: draw 0.5s;
  @keyframes draw {
    0% {
      transform: translateX(-250px);
    }
  }
`;

const Drawer = (props) => {
const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <Container>
      <button className="button" onClick ={()=>{setToggleDrawer(!toggleDrawer)}}>Toggle</button>
      { toggleDrawer && 
      <Overlay onClick ={()=>{setToggleDrawer(false)}}>
      <DrawwerWrapper>
        <ul>
          <li>
            abc
          </li>
          <li>
            abc
          </li>
          <li>
            abc
          </li>
          <li>
            abc
          </li>
          <li>
            abc
          </li>
        </ul>
      </DrawwerWrapper>
      </Overlay>
      }
    </Container>
  )
}

export default Drawer;