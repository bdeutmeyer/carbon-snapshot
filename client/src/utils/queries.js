import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    name
    electricConsumption {
      electricCompany
      kwh
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

export const ELEC_SOURCES = gql`
query ElecSources($companyName: String!)  {
  elecSources(companyName: $companyName) {
    companyName
    sourceBreakdown {
      coal
      hydro
      naturalGas
      nuclear
      nuclearOther
      oil
      other
      renewables
      solar
      wind
    }
  }
}
`;
