const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    electricConsumption: [ElectricConsumption]
    naturalGasConsumption: [NaturalGasConsumption]
    gasolineConsumption: [GasolineConsumption]
    snapshots: [Snapshot]
  }

  type ElectricConsumption {
    userId: ID
    kWh: Int
    billDate: String
    comment: String
  }

  type NaturalGasConsumption {
    userId: ID
    therms: Int
    billDate: String
    comment: String
  }

  type GasolineConsumption {
    userId: ID
    gallons: Int
    purchaseDate: String
    comment: String
  }

  type Snapshot {
    userId: ID
    startDate: String
    endDate: String
    electricFootprint: Int
    naturalGasFootprint: Int
    gasolineFootprint: Int
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
  }
`;

module.exports = typeDefs;