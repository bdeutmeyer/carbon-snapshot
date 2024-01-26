const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    electricConsumption: [ElectricConsumption]
    naturalGasConsumption: [NaturalGasConsumption]
    gasolineConsumption: [GasolineConsumption]
  }

  type ElectricCompany {
    _id: ID
    companyName: String
    sourceBreakdown: SourceBreakdown
  }

  type SourceBreakdown {
    coal: Float
    hydro: Float
    naturalGas: Float
    nuclear: Float
    nuclearOther: Float
    oil: Float
    other: Float
    renewables: Float
    solar: Float
    wind: Float
  }

  type ElectricConsumption {
    userId: ID
    electricCompany: String
    kwh: Int
    billDate: String
    carbonOutput: Int
    comment: String
  }

  type NaturalGasConsumption {
    userId: ID
    therms: Int
    billDate: String
    carbonOutput: Int
    comment: String
  }

  type GasolineConsumption {
    userId: ID
    gallons: Int
    purchaseDate: String
    carbonOutput: Int
    comment: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    elecSources(companyName: String!): ElectricCompany
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addElectricUse(electricCompany: String!, kwh: Int!, billDate: String!, carbonOutput: Int, comment: String): ElectricConsumption
    addNaturalGasUse(therms: Int!, billDate: String!, carbonOutput: Int, comment: String): NaturalGasConsumption
    addGasolineUse(gallons: Int!, purchaseDate: String!, carbonOutput: Int, comment: String): GasolineConsumption
  }
`;

module.exports = typeDefs;