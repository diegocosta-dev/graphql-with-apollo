import React from 'react';
import styled from 'styled-components';
import { Tools, Trash } from '@styled-icons/entypo';

type Props = {
  companies: Companies[];
};

type Companies = {
  id: number;
  name: string;
  description: string;
  users: number;
};

type ButtonProps = {
  bgcolor?: string;
  color?: string;
  hover?: string;
};

const Button = styled.button<ButtonProps>`
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

function Users({ companies }: Props) {
  return (
    <tbody>
      {companies.map((company) => (
        <tr key={company.id}>
          <td>{company.id}</td>
          <td>{company.name}</td>
          <td>{company.description}</td>
          <td>{company.users}</td>
          <td>
            <Button>
              <Tools />
            </Button>
            <Button hover="#961313" bgcolor="#D21F1F">
              <Trash />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Users;
