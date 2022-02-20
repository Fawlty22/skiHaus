import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user ($email: String!){
    user(email: $email) {
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
          snowboards{
            _id
          }
          boots{
            _id
          }
        }
      }
    }
  }
`

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
          snowboards{
            _id
          }
          boots{
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
