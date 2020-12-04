import React, { useState, useEffect } from 'react';
import NaveBar from '../components/NavBar';
import Container from '../components/Utils/Container';
import Title from '../components/Utils/Title';
import ListCompanies from '../components/ListCompanies';
import Pagination from '../components/Pagination';
import CreateButton from '../components/Utils/CreateButton';

function Companies() {
  const [actualPage, setActualPage] = useState<number>(1);
  const [companies, setCompanies] = useState<any>([]);
  const [filterByID, setFilterByNumber] = useState<boolean>(true);

  const TOTAL_COMPANIES_PER_PAGE = 7;
  const TOTAL_COMPANIES = companies.length;

  useEffect(() => {
    const data = [
      { id: 1, name: 'NetFliox', description: 'NetFlix', users: 1 },
      { id: 2, name: 'NetFliox', description: 'NetFlix', users: 2 },
      { id: 3, name: 'NetFliox', description: 'NetFlix', users: 2 },
      { id: 4, name: 'NetFliox', description: 'NetFlix', users: 1 },
      { id: 5, name: 'NetFliox', description: 'NetFlix', users: 4 },
      { id: 6, name: 'NetFliox', description: 'NetFlix', users: 3 },
      { id: 7, name: 'NetFliox', description: 'NetFlix', users: 3 },
    ];
    function getCompanies() {
      setCompanies(data);
    }
    getCompanies();
  }, []);

  function changePage(page: number) {
    setActualPage(page);
  }

  const companiesInPage = [...companies].splice(
    (actualPage - 1) * TOTAL_COMPANIES_PER_PAGE,
    TOTAL_COMPANIES_PER_PAGE
  );

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
        <ListCompanies filter={filterId} companies={companiesInPage} />
        <Pagination
          totalItems={TOTAL_COMPANIES}
          itemsPerPage={TOTAL_COMPANIES_PER_PAGE}
          actualPage={actualPage}
          changePage={changePage}
        />
      </Container>
    </div>
  );
}

export default Companies;
