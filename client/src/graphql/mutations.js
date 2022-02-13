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

export const ADDSKI_MUTATION = gql`
  mutation addSki($brand: String!, $model: String!, $condition: String!) {
    addSki(brand: $brand, model: $model, condition: $condition) {
      _id
      brand
      model
      condition
    }
  }
`;

export const ADDSNOWBOARD_MUTATION = gql`
  mutation addSnowboard($brand: String!, $model: String!, $condition: String!) {
    addSnowboard(brand: $brand, model: $model, condition: $condition) {
      _id
      brand
      model
      condition
    }
  }
`;

export const ADDBOOT_MUTATION = gql`
  mutation addBoot($brand: String!, $model: String!, $condition: String!) {
    addBoot(brand: $brand, model: $model, condition: $condition) {
      _id
      brand
      model
      condition
    }
  }
`;
