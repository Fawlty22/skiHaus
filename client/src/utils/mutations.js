import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($name: String!, $password: String) {
    login(name: $name, password: $password) {
      token
      author {
        name
      }
    }
  }
`;