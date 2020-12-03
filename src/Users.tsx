import React, { useState, useEffect } from 'react';
import NaveBar from './components/NavBar';
import Container from './components/Container';
import Title from './components/Title';
import ListUsers from './components/ListUsers';
import Pagination from './components/Pagination';
import CreateButton from './components/CreateButton';

function Users() {
  const [actualPage, setActualPage] = useState<number>(1);
  const [users, setUsers] = useState<any>([]);
  const [filterByID, setFilterByNumber] = useState<boolean>(true);

  const TOTAL_USERS_PER_PAGE = 7;
  const TOTAL_USERS = users.length;

  useEffect(() => {
    const data = [
      { id: 1, fistName: 'Diego', age: 35, companyId: 1 },
      { id: 2, fistName: 'Alex', age: 18, companyId: 2 },
      { id: 3, fistName: 'Sonia', age: 20, companyId: 2 },
      { id: 4, fistName: 'Marcus', age: 40, companyId: 1 },
      { id: 5, fistName: 'Junior', age: 18, companyId: 4 },
      { id: 6, fistName: 'David', age: 30, companyId: 3 },
      { id: 7, fistName: 'Luis', age: 28, companyId: 3 },
    ];
    function getUsers() {
      setUsers(data);
    }
    getUsers();
  }, []);

  function changePage(page: number) {
    setActualPage(page);
  }

  const usersInPage = [...users].splice(
    (actualPage - 1) * TOTAL_USERS_PER_PAGE,
    TOTAL_USERS_PER_PAGE
  );

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
      <NaveBar>
        <div>Desh Board</div>
      </NaveBar>
      <Container>
        <Title>Users</Title>
        <CreateButton href="/companies" style={{ textAlign: 'right' }}>
          New User
        </CreateButton>
        <ListUsers filter={filterId} users={usersInPage} />
        <Pagination
          totalItems={TOTAL_USERS}
          itemsPerPage={TOTAL_USERS_PER_PAGE}
          actualPage={actualPage}
          changePage={changePage}
        />
      </Container>
    </div>
  );
}

export default Users;
