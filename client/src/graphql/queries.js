import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      username
      email
      firstName
      lastName
      birthDate
      phone
      contracts {
        _id
        checkOutDate
        checkInDate
        equipment {
          boots {
            _id
            brand
            model
            condition
            available
          }
          skis {
            _id
            brand
            model
            condition
            available
          }
          snowboards {
            _id
            brand
            model
            condition
            available
          }
        }
        active
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
          snowboards {
            _id
          }
          boots {
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

export const QUERY_CONTRACTS = gql`
{
    contracts {
      _id
      checkOutDate
      checkInDate
      active
      user {
        _id
        username
        email
        firstName
        lastName
        birthDate
        phone
      }
      equipment {
        boots {
          _id
          brand
          model
          condition
          available
        }
        skis {
          _id
          brand
          model
          condition
          available
        }
        snowboards {
          _id
          brand
          model
          condition
          available
        }
      }
    }
  }
`;

export const QUERY_CONTRACT = gql`
query contract($_id: ID!) {
  contract(_id: $_id) {
    _id
    user {
      _id
      username
      email
      firstName
      lastName
      birthDate
      phone
    }
    checkOutDate
    checkInDate
    active
    equipment {
      boots {
        _id
        brand
        model
        condition
        available
      }
      skis {
        _id
        brand
        model
        condition
        available
      }
      snowboards {
        _id
        model
        brand
        condition
        available
      }
    }
  }
}
`;
