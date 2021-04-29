import { GraphQLList } from 'graphql'; //반환을 하나가 아닌 한 형태의 여러개로 보낼때
import { Users } from '../../Entities/Users'; //데이터베이스 테이블의 형식
import { UserType } from '../TypeDefs/User'; //반환형태를 지닌 
//해당하는 이름으로 쿼리가 들어올 경우
//반환형태와 할 행동들을 정의
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() { //행동
    return Users.find();
  }
}

//export const GET_ALL_USERS = {
//  type: new GraphQLList(UserType), //반환형태
//  resolve() { //행동
//    return Users.find();
//  }
//}