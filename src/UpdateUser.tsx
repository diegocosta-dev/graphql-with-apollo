import { useState } from 'react';
import Nav from './components/NavBar';
import Contaimer from './components/Utils/Container';
import { Input, Select, FormButton, FormContainer } from './components/Utils/From';
import Title from './components/Utils/Title';

function UpdateUser(props: any) {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [company, setCompany] = useState<string>('1');

  function update(event: any) {
    event.preventDefault();
    console.log(props.match.params.id);
    return;
  }

  return (
    <>
      <Nav />
      <Contaimer>
        <Title>Update user</Title>
        <FormContainer>
          <form onSubmit={update}>
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
              onChange={(event) => setAge(event.target.value)}
              name="age"
              type="number"
            ></Input>
            <label htmlFor="company">Company</label>
            <Select
              name="company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            >
              <option value="1">NetFlix</option>
              <option value="2">Amazon</option>
              <option value="3">Google</option>
              <option value="4">Yahoo</option>
            </Select>
            <FormButton type="submit">Update</FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default UpdateUser;
