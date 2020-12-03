import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  width: 100%;
  background-color: #556871;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #334147;
  }
`;

const FormContainer = styled.div`
  padding: 30px;
  background-color: #dadada;
  border-radius: 8px;
  margin-top: 15px;
`;

export { Input, Select, FormButton, FormContainer };
