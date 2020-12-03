import React from 'react';
import Users from './Ursers';
import Table from './Utils/Table';
import TD from './Utils/TD';

//->

type UserProps = {
  users: User[];
  filter?: (event: any) => void;
};

type User = {
  id: number;
  fistName: string;
  age: number;
  companyId: number;
};

function ListUsers({ users, filter }: UserProps) {
  return (
    <Table>
      <thead>
        <TD onClick={filter}>
          <span style={{ cursor: 'pointer' }}>Id</span>
        </TD>
        <TD>Name</TD>
        <TD>Age</TD>
        <TD>Company</TD>
        <TD>Action</TD>
      </thead>
      <Users users={users} />
    </Table>
  );
}

export default ListUsers;
