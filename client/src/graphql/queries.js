import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
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
      _id
    }
    snowboards {
      _id
    }
    boots {
      _id
    }
  }
`;
