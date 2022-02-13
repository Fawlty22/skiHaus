import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
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
