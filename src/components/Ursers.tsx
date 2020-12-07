import React from 'react';
import { Tools, Trash } from '@styled-icons/entypo';
import SmButton from './Utils/SmButton';

type Props = {
  users: User[];
  deleteUserByID: (id: number, fistName: string) => void;
};

type User = {
  id: number;
  fistName: string;
  age: number;
  companyId: number;
  company: Company;
};

type Company = {
  name: string;
};

function Users({ users, deleteUserByID }: Props) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.fistName}</td>
          <td>{user.age}</td>
          <td>{user.company.name}</td>
          <td>
            <a href={`updateuser/${user.id}`}>
              <SmButton>
                <Tools />
              </SmButton>
            </a>

            <SmButton
              onClick={() => deleteUserByID(user.id, user.fistName)}
              hover="#961313"
              bgcolor="#D21F1F"
            >
              <Trash />
            </SmButton>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Users;
