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
  mutation createCompany($company: AddCompanyInput) {
    addCompany(company: $company) {
      id
      name
      description
      users {
        id
        fistName
        age
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($fistName: String!, $age: Int!, $company: UserCompanyInput) {
    addUser(fistName: $fistName, age: $age, company: $company) {
      id
      fistName
      age
      company {
        id
        name
        description
      }
    }
  }
`;

export { GET_USERS, GET_COMPANIES, CREATE_COMPANY, ADD_USER };
