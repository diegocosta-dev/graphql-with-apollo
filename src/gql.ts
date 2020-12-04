import { gql } from '@apollo/client';

export const GET_USERS = gql`
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
