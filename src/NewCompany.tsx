import { useState } from 'react';
import Nav from './components/NavBar';
import Contaimer from './components/Utils/Container';
import { Input, FormButton, FormContainer } from './components/Utils/From';
import Title from './components/Utils/Title';

function NewCompany() {
  const [name, setName] = useState<string>('');
  const [description, setDescripition] = useState<string>('');

  function creatNewCompany(event: any) {
    event.preventDefault();
    return;
  }

  return (
    <>
      <Nav />
      <Contaimer>
        <Title>Create new company</Title>
        <FormContainer>
          <form onSubmit={creatNewCompany}>
            <label htmlFor="name">Name</label>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
            ></Input>
            <label htmlFor="description">Description</label>
            <Input
              value={description}
              onChange={(event) => setDescripition(event.target.value)}
              name="description"
              type="text"
            ></Input>
            <FormButton type="submit">Create</FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default NewCompany;
