import styled from 'styled-components';
import { ReactNode } from 'react';

type PropsButon = {
  actualPage?: number;
  children?: ReactNode;
  last?: number;
};

const Pages = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonPage = styled.button<PropsButon>`
  width: 30px;
  height: ${(props) => (props.actualPage === props.children ? '35px' : '30px')};
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  font-weight: ${(props) => (props.actualPage === props.children ? '900' : '400')};
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === props.children ? '#c4c4c4' : '#999999')};
  }
`;

const FistButton = styled.button<PropsButon>`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === 1 ? '#c4c4c4' : '#999999')};
  }
`;

const LastButton = styled.button<PropsButon>`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === props.last ? '#c4c4c4' : '#999999')};
  }
`;

export { Pages, ButtonPage, FistButton, LastButton };
