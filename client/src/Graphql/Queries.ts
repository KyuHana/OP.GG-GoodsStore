import { gql } from '@apollo/client';
//client용 쿼리 작성
export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      username
      password
    }
  }
`;