import React from 'react';
import { Tools, Trash } from '@styled-icons/entypo';
import SmButton from './Utils/SmButton';

type Props = {
  users: User[];
};

type User = {
  id: number;
  fistName: string;
  age: number;
  companyId: number;
};

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
            <SmButton>
              <Tools />
            </SmButton>
            <SmButton hover="#961313" bgcolor="#D21F1F">
              <Trash />
            </SmButton>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Users;
