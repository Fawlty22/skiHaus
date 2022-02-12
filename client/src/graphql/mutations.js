import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      employee {
        _id
      }
    }
  }
`;

export const ADDUSER_MUTATION = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $birthDate: String!
    $email: String!
    $phone: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      password: $password
      birthDate: $birthDate
      email: $email
      phone: $phone
    ) {
      _id
    }
  }
`;
