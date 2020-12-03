import React from 'react';
import { Tools, Trash } from '@styled-icons/entypo';
import SmButton from './Utils/SmButton';

type Props = {
  companies: Companies[];
};

type Companies = {
  id: number;
  name: string;
  description: string;
  users: number;
};

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
