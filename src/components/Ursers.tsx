import React from 'react';
import styled from 'styled-components';
import { Tools, Trash } from '@styled-icons/entypo';

type Props = {
  users: User[];
};

type User = {
  id: number;
  fistName: string;
  age: number;
  companyId: number;
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

function Users({ users }: Props) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.fistName}</td>
          <td>{user.age}</td>
          <td>{user.companyId}</td>
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
