import { useState } from 'react';
import Nav from '../components/NavBar';
import Contaimer from '../components/Utils/Container';
import { Input, FormButton, FormContainer } from '../components/Utils/From';
import Title from '../components/Utils/Title';
import { CREATE_COMPANY } from '../gql';
import { useMutation } from '@apollo/client';
import { ErroMsg } from '.././components/Utils/Msgs';

function NewCompany() {
  const [name, setName] = useState<string>('');
  const [description, setDescripition] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  const [addCompany] = useMutation(CREATE_COMPANY);

  async function creatNewCompany(event: any) {
    if (name === '' || description === '') {
      event.preventDefault();
      setIsValid(true);
      return;
    }

    const { data } = await addCompany({
      variables: { company: { name, description } },
    });
    console.log(data);
    return;
  }

  return (
    <>
      <Nav />
      <ErroMsg show={isValid}>Erro! Preencha os campos corretamente!</ErroMsg>
      <Contaimer>
        <Title>Create new company</Title>
        <FormContainer>
          <form onSubmit={creatNewCompany} action="/">
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
