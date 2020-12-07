import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../components/NavBar';
import Contaimer from '../components/Utils/Container';
import { Input, Select, FormButton, FormContainer } from '../components/Utils/From';
import Title from '../components/Utils/Title';
import { ADD_USER, GET_COMPANIES } from '../gql';
import { useMutation, useQuery } from '@apollo/client';
import { ErroMsg } from '../components/Utils/Msgs';

function NewUser() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [company, setCompany] = useState<number>(0);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const history = useHistory();
  const [addUser, { loading: loadingAddUser }] = useMutation(ADD_USER);
  const { data, loading } = useQuery(GET_COMPANIES);

  async function create(event: any) {
    event.preventDefault();
    if (name === '' || age === 0 || company === 0) {
      setIsInvalid(true);
      return;
    }

    await addUser({
      variables: {
        fistName: name,
        age: age,
        company: {
          connect: {
            id: company,
          },
        },
      },
    });
    history.push('/');
    return;
  }

  const isSubmitting = loading || loadingAddUser;
  const companies = data ? data.companies.data : [];

  return (
    <>
      <Nav />
      <ErroMsg show={isInvalid}>Erro! Preenchan os campos corretamente!</ErroMsg>
      <Contaimer>
        <Title>Create new user</Title>
        <FormContainer>
          <form onSubmit={create}>
            <label htmlFor="name">Name</label>
            <Input
              disabled={isSubmitting}
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
            ></Input>
            <label htmlFor="age">Age</label>
            <Input
              disabled={isSubmitting}
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value, 10))}
              name="age"
              type="number"
            ></Input>
            <label htmlFor="company">Company</label>
            <Select
              disabled={isSubmitting}
              name="company"
              value={company}
              onChange={(event) => setCompany(parseInt(event.target.value))}
            >
              {companies.map((comp: any) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
            </Select>
            <FormButton disabled={isSubmitting} type="submit">
              Create
            </FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default NewUser;
