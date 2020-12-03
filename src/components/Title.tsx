import React, { ReactNode } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 20px;
  color: #556871;
  display: inline-block;
`;
type Props = {
  children: ReactNode;
};

function Title(props: Props) {
  return <H1>{props.children}</H1>;
}

export default Title;
