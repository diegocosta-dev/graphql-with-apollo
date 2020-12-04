import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers($pagination: PaginationInput) {
    users(pagination: $pagination) {
      data {
        id
        fistName
        age
        companyId
      }
      pagination {
        totalItems
        page
        limit
      }
    }
  }
`;

const GET_COMPANIES = gql`
  query getCompanies($pagination: PaginationInput) {
    companies(pagination: $pagination) {
      data {
        id
        name
        description
      }
      pagination {
        totalItems
        page
        limit
      }
    }
  }
`;

const CREATE_COMPANY = gql`
  mutation crateCompany($createCompay: CompanyInput) {
    addCompany(name: "NetFlix", description: "asasas") {
      id
      name
      description
    }
  }
`;

export { GET_USERS, GET_COMPANIES };
