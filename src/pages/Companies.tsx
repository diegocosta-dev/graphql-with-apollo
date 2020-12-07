import React, { useState } from 'react';
import NaveBar from '../components/NavBar';
import Container from '../components/Utils/Container';
import Title from '../components/Utils/Title';
import ListCompanies from '../components/ListCompanies';
import Pagination from '../components/Pagination';
import CreateButton from '../components/Utils/CreateButton';
import { useQuery, useMutation } from '@apollo/client';
import { GET_COMPANIES, DELETE_COMPANY } from '../gql';

function Companies() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(7);

  const { data, loading, refetch } = useQuery(GET_COMPANIES, {
    variables: { pagination: { page, limit } },
  });

  function changePage(page: number) {
    setPage(page);
  }

  const [deleteCompany] = useMutation(DELETE_COMPANY);

  async function deleteCompanyByID(ID: number, name: string) {
    const isDelete = window.confirm(`Do you realy want delete ${name}?`);
    if (isDelete) {
      setPage(1);
      await deleteCompany({
        variables: { id: ID },
      });
      refetch();
    }
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
            <ListCompanies deleteCompanyByID={deleteCompanyByID} companies={data.companies.data} />
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
