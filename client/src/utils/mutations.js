import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_ELECTRIC_USE = gql`
mutation addElectricUse($electricCompany: String!, $kwh: Int!, $billDate: String!, $carbonOutput: Int!, $comment: String) {
  addElectricUse(electricCompany: $electricCompany, kwh: $kwh, billDate: $billDate, carbonOutput: $carbonOutput, comment: $comment) {
    electricCompany
    kwh
    billDate
    carbonOutput
    comment
    userId
  }
}
`

export const ADD_NATGAS_USE = gql`
mutation addNaturalGasUse($therms: Int!, $billDate: String!, $carbonOutput: Int, $comment: String) {
  addNaturalGasUse(therms: $therms, billDate: $billDate, carbonOutput: $carbonOutput, comment: $comment) {
    therms
    billDate
    carbonOutput
    comment
    userId
  }
}
`

export const ADD_GASOLINE_USE = gql`
mutation addGasolineUse($gallons: Int!, $purchaseDate: String!, $carbonOutput: Int, $comment: String) {
  addGasolineUse(gallons: $gallons, purchaseDate: $purchaseDate, carbonOutput: $carbonOutput, comment: $comment) {
    gallons
    purchaseDate
    carbonOutput
    comment
    userId
  }
}
`