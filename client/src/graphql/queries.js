import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
    }
  }
`;

export const QUERY_USER = gql`
  query GetUser($email: String!) {
    user(email: $email) {
      username
      _id
      email
      firstName
      lastName
      birthDate
      phone
      contracts {
        _id
        active
        checkOutDate
        checkInDate
        equipment {
          boots {
            _id
          }
          skis {
            _id
          }
          snowboards {
            _id
          }
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      firstName
      lastName
      email
      birthDate
      phone
      contracts {
        checkOutDate
        checkInDate
        active
        equipment {
          skis {
            _id
          }
        }
      }
    }
  }
`;

export const ALLEQUIPMENT_QUERY = gql`
  {
    skis {
      brand
      model
      _id
    }
    snowboards {
      brand
      model
      _id
    }
    boots {
      brand
      model
      _id
    }
  }
`;
