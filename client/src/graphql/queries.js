import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
  {
    employee {
      username
    }
  }
`;

// export const ALLEQUIPMENT_QUERY = gql`
//   allEquipment {
//     skis {
//       _id
//       brand
//       model
//       condition
//     }
//     snowboards {
//       _id
//       brand
//       model
//       condition
//     }
//     boots {
//       _id
//       brand
//       model
//       condition
//     }
//   }
// `;
