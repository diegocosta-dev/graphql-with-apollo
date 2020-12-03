import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  totalItems: number;
  itemsPerPage: number;
  actualPage: number;
  changePage: (page: number) => void;
};

type PropsButon = {
  actualPage?: number;
  children?: ReactNode;
  last?: number;
};

const Pages = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonPage = styled.button<PropsButon>`
  width: 30px;
  height: ${(props) => (props.actualPage === props.children ? '35px' : '30px')};
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  font-weight: ${(props) => (props.actualPage === props.children ? '900' : '400')};
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === props.children ? '#c4c4c4' : '#999999')};
  }
`;

const FistButton = styled.button<PropsButon>`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === 1 ? '#c4c4c4' : '#999999')};
  }
`;

const LastButton = styled.button<PropsButon>`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color: #c4c4c4;
  border: none;
  color: #fff;

  &:hover {
    background-color: ${(props) => (props.actualPage === props.last ? '#c4c4c4' : '#999999')};
  }
`;

function Pagination(props: Props) {
  function goBackPage() {
    props.changePage(props.actualPage - 1);
  }

  function goPage() {
    props.changePage(props.actualPage + 1);
  }

  function makePages(page: number) {
    return (
      <ButtonPage
        key={page}
        onClick={page > props.actualPage ? goPage : goBackPage}
        actualPage={props.actualPage}
        disabled={props.actualPage === page}
      >
        {page}
      </ButtonPage>
    );
  }

  function getPages() {
    const numPages = Math.ceil(props.totalItems / props.itemsPerPage);
    let pages = [];
    for (let page = 1; page <= numPages; page++) {
      if (page < props.actualPage + 2 && page > props.actualPage - 2) {
        pages.push(makePages(page));
      }
    }

    return pages;
  }
  const numPages = Math.ceil(props.totalItems / props.itemsPerPage);
  return (
    <Pages>
      <FistButton
        onClick={goBackPage}
        actualPage={props.actualPage}
        disabled={props.actualPage === 1}
      >
        <strong>{'<'}</strong>
      </FistButton>
      {getPages()}
      <LastButton
        actualPage={props.actualPage}
        onClick={goPage}
        last={numPages}
        disabled={props.actualPage === numPages}
      >
        <strong>{'>'}</strong>
      </LastButton>
    </Pages>
  );
}

export default Pagination;
