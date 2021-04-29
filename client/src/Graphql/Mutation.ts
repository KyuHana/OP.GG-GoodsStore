import { gql } from "@apollo/client";
//client쪽의 gql 정의 
export const CREATE_USER = gql`
  mutation createUser($name: String! $username: String! $password: String!) { 
    createUser(
      name: $name
      username: $username
      password: $password
    ) {
      successful
      message
    }
  } 
`

export const UPDATE_PASSWORD = gql`
  mutation updateUser($username: String, $currentPassword: String, $newPassword: String) {
    updatePassword(
      username: $username,
      oldPassword: $currentPassword,
      newPassword: $newPassword
    ) {
      successful
      message   
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(
      id: $id
    ) {
      message
    }
  }

`