import styled from 'styled-components';

type SmButtonProps = {
  bgcolor?: string;
  color?: string;
  hover?: string;
};

const SmButton = styled.button<SmButtonProps>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.bgcolor || '#31acc7'};
  color: ${(props) => props.color || '#FFF'};
  border-radius: 8px;
  padding: 5px;
  margin: 4px;
  border: none;
  display: inline;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.hover || '#268196'};
  }
`;

export default SmButton;
