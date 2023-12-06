import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    name
    electricCompany
    electricConsumption {
      kWh
      billDate
      carbonOutput
      comment
    }
    naturalGasConsumption {
      therms
      billDate
      carbonOutput
      comment
    }
    gasolineConsumption {
      gallons
      purchaseDate
      carbonOutput
      comment
    }
  }
}
`;
