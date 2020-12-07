import React, { useState } from 'react';
import NaveBar from '../components/NavBar';
import Container from '../components/Utils/Container';
import Title from '../components/Utils/Title';
import ListUsers from '../components/ListUsers';
import Pagination from '../components/Pagination';
import CreateButton from '../components/Utils/CreateButton';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, DELETE_USER } from '../gql';

function Users() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(7);

  const { data, loading, refetch } = useQuery(GET_USERS, {
    variables: { pagination: { page, limit } },
  });

  function changePage(page: number) {
    setPage(page);
  }
  console.log(data);
  ////////////////////////////////////////////////////////////
  const [deleteUser] = useMutation(DELETE_USER);

  async function deleteUserByID(ID: number, fistName: string) {
    const isDelete = window.confirm(`Do you realy want delete ${fistName}?`);
    if (isDelete) {
      setPage(1);
      await deleteUser({
        variables: {
          id: ID,
        },
      });
      refetch();
    }
  }
  return (
    <div>
      <NaveBar activeUser={true} />
      <Container style={{ height: '400px' }}>
        <Title>Users</Title>
        <CreateButton href="/newuser" style={{ textAlign: 'right' }}>
          New User
        </CreateButton>
        {loading && <p>Loading</p>}
        {data && data.users && (
          <>
            <ListUsers deleteUserByID={deleteUserByID} users={data.users.data} />
          </>
        )}
      </Container>
      {loading && <p></p>}
      {data && data.users && (
        <Pagination
          totalItems={data.users.pagination.totalItems}
          itemsPerPage={limit}
          actualPage={page}
          changePage={changePage}
        />
      )}
    </div>
  );
}

export default Users;
