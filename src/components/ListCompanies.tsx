import React from 'react';
import Companies from './Companies';
import Table from './Utils/Table';
import TD from './Utils/TD';

type UserProps = {
  companies: Comp[];
  deleteCompanyByID: (ID: number, name: string) => void;
  filter?: (event: any) => void;
};

type Comp = {
  id: number;
  name: string;
  description: string;
  users: number;
};

function ListUsers({ companies, filter, deleteCompanyByID }: UserProps) {
  return (
    <Table>
      <thead>
        <tr>
          <TD onClick={filter}>
            <span style={{ cursor: 'pointer' }}>Id</span>
          </TD>
          <TD>Name</TD>
          <TD>Desciption</TD>
          <TD>Users</TD>
          <TD>Action</TD>
        </tr>
      </thead>
      <Companies deleteCompanyByID={deleteCompanyByID} companies={companies} />
    </Table>
  );
}

export default ListUsers;
