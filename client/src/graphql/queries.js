import { gql } from '@apollo/client';

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
    }
  }
`;