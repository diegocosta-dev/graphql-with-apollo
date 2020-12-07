import React from 'react';
import { Tools, Trash } from '@styled-icons/entypo';
import SmButton from './Utils/SmButton';

type Props = {
  companies: Companies[];
  deleteCompanyByID: (ID: number, name: string) => void;
};

type Companies = {
  id: number;
  name: string;
  description: string;
  users: any;
};

function Users({ companies, deleteCompanyByID }: Props) {
  return (
    <tbody>
      {companies.map((company) => (
        <tr key={company.id}>
          <td>{company.id}</td>
          <td>{company.name}</td>
          <td>{company.description}</td>
          <td>{company.users.length}</td>
          <td>
            <a href={`updatecompany/${company.id}`}>
              <SmButton>
                <Tools />
              </SmButton>
            </a>
            <SmButton
              onClick={() => deleteCompanyByID(company.id, company.name)}
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
