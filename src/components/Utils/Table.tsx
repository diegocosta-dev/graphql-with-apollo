import styled from 'styled-components';

const Table = styled.table`
  background-color: #dadada;
  color: #556871;
  width: 100%;
  border-collapse: collapse;
  thead {
    background-color: #fffbfb;
  }
  thead td {
    padding-left: 25px;
    height: 40px;
    font-weight: 600;
  }
  tr td {
    height: 30px;
    padding-left: 30px;
  }
  tr:nth-child(even) {
    background-color: #fffbfb;
  }
`;

export default Table;
