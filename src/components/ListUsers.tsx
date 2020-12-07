import React from 'react';
import Users from './Ursers';
import Table from './Utils/Table';
import TD from './Utils/TD';

//->

type UserProps = {
  users: User[];
  deleteUserByID: (id: number, fistName: string) => void;
  filter?: (event: any) => void;
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

function ListUsers({ users, filter, deleteUserByID }: UserProps) {
  return (
    <Table>
      <thead>
        <tr>
          <TD onClick={filter}>
            <span style={{ cursor: 'pointer' }}>Id</span>
          </TD>
          <TD>Name</TD>
          <TD>Age</TD>
          <TD>Company</TD>
          <TD>Action</TD>
        </tr>
      </thead>
      <Users deleteUserByID={deleteUserByID} users={users} />
    </Table>
  );
}

export default ListUsers;
