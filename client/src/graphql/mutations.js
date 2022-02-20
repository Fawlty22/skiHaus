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
    $birthDate: String!
    $email: String!
    $phone: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      birthDate: $birthDate
      email: $email
      phone: $phone
    ) {
      _id
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
      $_id: ID!
      $firstName: String!
      $lastName: String!
      $username: String!
      $birthDate: String!
      $email: String!
      $phone: String!
  ) {
    editUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      username: $username
      birthDate: $birthDate
      email: $email
      phone: $phone
    ) {
      email
    }
  }
`;


export const CREATE_CONTRACT = gql`
  mutation createContract(
    $user: String! 
    $checkOutDate: String! 
    $checkInDate: String!
    $equipment:EquipmentInput!) {
      createContract(
        user: $user 
        checkOutDate: $checkOutDate 
        checkInDate: $checkInDate
        equipment: $equipment) {
          _id
          username
          contracts {
            _id
            active
            equipment {
              skis {
                _id
                model
              }
            }
          }
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
