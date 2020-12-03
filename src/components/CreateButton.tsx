import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProp = {
  children: ReactNode;
};

const Button = styled.a<ButtonProp>`
  position: absolute;
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  background-color: #556871;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  right: 0;
  text-decoration: none;
  :hover {
    background-color: #334147;
  }
`;

export default Button;
