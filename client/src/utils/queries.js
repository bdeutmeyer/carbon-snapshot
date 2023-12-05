import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    name
    electricCompany
    electricConsumption {
      kWh
      billDate
      comment
    }
    naturalGasConsumption {
      therms
      billDate
      comment
    }
    gasolineConsumption {
      gallons
      purchaseDate
      comment
    }
  }
}
`;
