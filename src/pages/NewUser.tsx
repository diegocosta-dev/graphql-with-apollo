import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../components/NavBar';
import Contaimer from '../components/Utils/Container';
import { Input, Select, FormButton, FormContainer } from '../components/Utils/From';
import Title from '../components/Utils/Title';
import { ADD_USER } from '../gql';
import { useMutation } from '@apollo/client';
import { ErroMsg } from '../components/Utils/Msgs';

function NewUser() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [company, setCompany] = useState<number>(0);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const history = useHistory();

  const [addUser] = useMutation(ADD_USER);

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
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="name"
              type="text"
            ></Input>
            <label htmlFor="age">Age</label>
            <Input
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value, 10))}
              name="age"
              type="number"
            ></Input>
            <label htmlFor="company">Company</label>

            <Input
              value={company}
              name="company"
              type="number"
              onChange={(event) => setCompany(parseInt(event.target.value, 10))}
            ></Input>
            {/* <Select
              name="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            >
              <option value="1">NetFlix</option>
              <option value="2">Amazon</option>
              <option value="3">Google</option>
              <option value="4">Yahoo</option>
            </Select> */}
            <FormButton type="submit">Create</FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default NewUser;
