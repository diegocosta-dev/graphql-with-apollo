import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Nav from '../components/NavBar';
import Contaimer from '../components/Utils/Container';
import { Input, Select, FormButton, FormContainer } from '../components/Utils/From';
import Title from '../components/Utils/Title';
import { UPDATE_USER, GET_USER_ID, GET_COMPANIES } from '../gql';
import { useMutation, useQuery } from '@apollo/client';
import { ErroMsg } from '../components/Utils/Msgs';

function UpdateUser(props: any) {
  const { id } = useParams<{ id: string }>();
  const [fistName, setFistName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [companyId, setCompany] = useState<string>('1');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const { data, loading } = useQuery(GET_USER_ID, {
    variables: { id },
  });

  const { data: dataCompany, loading: loadingCompany } = useQuery(GET_COMPANIES);
  const isSubmitting = loading || loadingCompany;
  const companies = dataCompany ? dataCompany.companies.data : [];

  const [updateUser] = useMutation(UPDATE_USER);
  const history = useHistory();
  function update(event: any) {
    event.preventDefault();
    if (fistName === '' || age === 0) {
      setIsInvalid(true);
      return;
    }
    updateUser({
      variables: { id, fistName, age, companyId },
    });
    history.push('/');
    return;
  }

  useEffect(() => {
    function setData() {
      if (data) {
        setFistName(data.user.fistName);
        setAge(data.user.age);
        setCompany(data.user.companyId);
      }
    }

    setData();
  }, [data]);

  return (
    <>
      <Nav />
      <Contaimer>
        <ErroMsg show={isInvalid}>Erro! Preencha os campos corretamente!</ErroMsg>
        <Title>Update user</Title>
        <FormContainer>
          <form onSubmit={update}>
            <label htmlFor="name">Name</label>
            <Input
              disabled={loading}
              value={fistName}
              onChange={(event) => setFistName(event.target.value)}
              name="name"
              type="text"
            ></Input>
            <label htmlFor="age">Age</label>
            <Input
              disabled={loading}
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value))}
              name="age"
              type="number"
            ></Input>
            <label htmlFor="company">Company</label>
            <Select
              disabled={isSubmitting}
              name="company"
              value={companyId}
              onChange={(event) => setCompany(event.target.value)}
            >
              {companies.map((comp: any) => (
                <option key={comp.id} value={comp.id}>
                  {comp.name}
                </option>
              ))}
            </Select>
            <FormButton disabled={loading} type="submit">
              Update
            </FormButton>
          </form>
        </FormContainer>
      </Contaimer>
    </>
  );
}

export default UpdateUser;
