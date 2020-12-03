import React from 'react';
import styled from 'styled-components';
import Companies from './Companies';
import Table from './Table';

//->

type UserProps = {
  companies: Comp[];
};

type Comp = {
  id: number;
  name: string;
  description: string;
  users: number;
};

const TD = styled.td`
  color: #556871;

  &:last-child {
    width: 120px;
  }
`;

function ListUsers({ companies }: UserProps) {
  return (
    <Table>
      <thead>
        <TD>Id</TD>
        <TD>Name</TD>
        <TD>Desciption</TD>
        <TD>Users</TD>
        <TD>Action</TD>
      </thead>
      <Companies companies={companies} />
    </Table>
  );
}

export default ListUsers;
