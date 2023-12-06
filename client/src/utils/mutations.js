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
mutation addElectricUse($electricCompany: String!, $kwh: Int!, $billDate: String!, $carbonOutput: Int) {
  addElectricUse(electricCompany: $electricCompany, kwh: $kwh, billDate: $billDate, carbonOutput: $carbonOutput) {
    electricCompany
    kwh
    billDate
    carbonOutput
    userId
  }
}
`