import React, { useState, useEffect } from 'react';
import NaveBar from '../components/NavBar';
import Container from '../components/Utils/Container';
import Title from '../components/Utils/Title';
import ListCompanies from '../components/ListCompanies';
import Pagination from '../components/Pagination';
import CreateButton from '../components/Utils/CreateButton';
import { useQuery } from '@apollo/client';
import { GET_COMPANIES } from '../gql';

function Companies() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(1);
  const [companies, setCompanies] = useState<any>([]);
  const [filterByID, setFilterByNumber] = useState<boolean>(true);

  const { data, loading } = useQuery(GET_COMPANIES, {
    variables: { pagination: { page, limit } },
  });

  function changePage(page: number) {
    setPage(page);
  }

  function filterId(event: any) {
    event.preventDefault();
    const listOfCompanies = companies;

    if (filterByID) {
      listOfCompanies.sort((ID: number, ID2: number) => (ID > ID2 ? 1 : -1));
      setCompanies(listOfCompanies);
      setFilterByNumber(false);
      return;
    }

    listOfCompanies.sort((ID: number, ID2: number) => (ID < ID2 ? 1 : -1));
    setCompanies(listOfCompanies);
    setFilterByNumber(true);
    return;
  }

  return (
    <div>
      <NaveBar>
        <div>Desh Board</div>
      </NaveBar>
      <Container>
        <Title>Companies</Title>
        <CreateButton href="/newcompany" style={{ textAlign: 'right' }}>
          New Company
        </CreateButton>
        {loading && <p>Loading...</p>}
        {data && data.companies && (
          <>
            <ListCompanies filter={filterId} companies={data.companies.data} />
            <Pagination
              totalItems={data.companies.pagination.totalItems}
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

export default Companies;
