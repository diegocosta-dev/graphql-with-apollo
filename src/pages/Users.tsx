import React, { useState, useEffect } from 'react';
import NaveBar from '../components/NavBar';
import Container from '../components/Utils/Container';
import Title from '../components/Utils/Title';
import ListUsers from '../components/ListUsers';
import Pagination from '../components/Pagination';
import CreateButton from '../components/Utils/CreateButton';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../gql';

function Users() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(1);
  const [users, setUsers] = useState<any>([]);
  const [filterByID, setFilterByNumber] = useState<boolean>(true);

  const { data, loading, error } = useQuery(GET_USERS, {
    variables: { pagination: { page, limit } },
  });

  function changePage(page: number) {
    setPage(page);
  }

  function filterId(event: any) {
    event.preventDefault();
    const listOfUsers = users;

    if (filterByID) {
      listOfUsers.sort((ID: number, ID2: number) => (ID > ID2 ? 1 : -1));
      setUsers(listOfUsers);
      setFilterByNumber(false);
      return;
    }

    listOfUsers.sort((ID: number, ID2: number) => (ID < ID2 ? 1 : -1));
    setUsers(listOfUsers);
    setFilterByNumber(true);
    return;
  }

  return (
    <div>
      <NaveBar />
      <Container>
        <Title>Users</Title>
        <CreateButton href="/newuser" style={{ textAlign: 'right' }}>
          New User
        </CreateButton>
        {loading && <p>Loading</p>}
        {data && data.users && (
          <>
            <ListUsers filter={filterId} users={data.users.data} />
            <Pagination
              totalItems={data.users.pagination.totalItems}
              itemsPerPage={limit}
              actualPage={page}
              changePage={changePage}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export default Users;
