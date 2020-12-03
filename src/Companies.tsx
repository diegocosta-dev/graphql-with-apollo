import React from 'react';
import NaveBar from './components/NavBar';
import Container from './components/Container';
import Title from './components/Title';
import ListCompanies from './components/ListCompanies';
import Pagination from './components/Pagination';
import CreateButton from './components/CreateButton';

const companies = [
  { id: 1, name: 'NetFliox', description: 'NetFlix', users: 1 },
  { id: 2, name: 'NetFliox', description: 'NetFlix', users: 2 },
  { id: 3, name: 'NetFliox', description: 'NetFlix', users: 2 },
  { id: 4, name: 'NetFliox', description: 'NetFlix', users: 1 },
  { id: 5, name: 'NetFliox', description: 'NetFlix', users: 4 },
  { id: 6, name: 'NetFliox', description: 'NetFlix', users: 3 },
  { id: 7, name: 'NetFliox', description: 'NetFlix', users: 3 },
];

function Companies() {
  return (
    <div>
      <NaveBar>
        <div>Desh Board</div>
      </NaveBar>
      <Container>
        <Title>Companies</Title>
        <CreateButton>New Company</CreateButton>
        <ListCompanies companies={companies} />
        {/* <Pagination /> */}
      </Container>
    </div>
  );
}

export default Companies;
