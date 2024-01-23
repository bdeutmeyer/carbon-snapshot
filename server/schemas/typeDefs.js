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