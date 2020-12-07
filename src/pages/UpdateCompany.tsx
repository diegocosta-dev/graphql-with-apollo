import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/NavBar';
import Contaimer from '../components/Utils/Container';
import { Input, FormButton, FormContainer } from '../components/Utils/From';
import Title from '../components/Utils/Title';
import { GET_COMPANY_ID, UPDATE_COMPANY } from '../gql';
import { useMutation, useQuery } from '@apollo/client';
import { ErroMsg } from '.././components/Utils/Msgs';

function UpdateCompany() {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>('');
  const [description, setDescripition] = useState<string>('');
  const [isValid, setIsValid] = useState(false);

  const { data, loading } = useQuery(GET_COMPANY_ID, {
    variables: { id },
  });

  const [updateCompany] = useMutation(UPDATE_COMPANY);

  useEffect(() => {
    function setData() {
      if (data) {
        setName(data.company.name);
        setDescripition(data.company.description);
      }
    }

    setData();
  }, [data]);

  async function creatNewCompany(event: any) {
    if (name === '' || description === '') {
      event.preventDefault();
      setIsValid(true);
      return;
    }
    await updateCompany({ variables: { id, name, description } });
    return;
  }

  return (
    <>
      <Nav />
      <ErroMsg show={isValid}>Erro! Preencha os campos corretamente!</ErroMsg>
      <Contaimer>
        <Title>Update new company</Title>
        <FormContainer>
          <form onSubmit={creatNewCompany} action="/companies">
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
            <FormButton type="submit">Update</FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default UpdateCompany;
