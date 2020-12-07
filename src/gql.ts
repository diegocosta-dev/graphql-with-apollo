import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers($pagination: PaginationInput) {
    users(pagination: $pagination) {
      data {
        id
        fistName
        age
        companyId
        company {
          name
        }
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
        users {
          id
          fistName
        }
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

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      fistName
    }
  }
`;

const DELETE_COMPANY = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(id: $id, deleteUsers: false) {
      name
    }
  }
`;

const UPDATE_USER = gql`
  mutation upDateUser($id: ID!, $fistName: String, $age: Int, $companyId: ID) {
    updateUser(id: $id, user: { fistName: $fistName, age: $age, companyId: $companyId }) {
      id
      fistName
      age
      companyId
    }
  }
`;

const GET_USER_ID = gql`
  query getUserId($id: ID) {
    user(id: $id) {
      id
      fistName
      age
      companyId
      company {
        id
        name
      }
    }
  }
`;

const GET_COMPANY_ID = gql`
  query getCompanyId($id: ID) {
    company(id: $id) {
      id
      name
      description
      users {
        id
        fistName
      }
    }
  }
`;

const UPDATE_COMPANY = gql`
  mutation upDateCompany($id: ID!, $name: String, $description: String) {
    updateCompany(id: $id, company: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export {
  GET_USERS,
  GET_COMPANIES,
  CREATE_COMPANY,
  ADD_USER,
  DELETE_USER,
  DELETE_COMPANY,
  UPDATE_USER,
  GET_USER_ID,
  GET_COMPANY_ID,
  UPDATE_COMPANY,
};
