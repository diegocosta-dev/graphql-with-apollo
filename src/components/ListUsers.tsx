import React from 'react';
import styled from 'styled-components';
import Users from './Ursers';
import Table from './Table';

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

const TD = styled.td`
  color: #556871;

  &:last-child {
    width: 120px;
  }
`;

function ListUsers({ users, filter }: UserProps) {
  return (
    <Table>
      <thead>
        <TD>
          <a style={{ cursor: 'pointer' }} onClick={filter}>
            Id
          </a>
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
