import { Pages, ButtonPage, FistButton, LastButton } from './Utils/Paginate';

type Props = {
  totalItems: number;
  itemsPerPage: number;
  actualPage: number;
  changePage: (page: number) => void;
};

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
