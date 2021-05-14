//graphql에 사용될 모든 것들을 모아두어 사용한다
//여기서는 안내만 하는 페이지
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from './Queries/User'; //해당 쿼리들이 정의된 파일에서 필요한 모듈가져오기 각 모듈들은 db와 통신을 하며 db의 정보를 읽는다.
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User'; //해당 뮤테이션들이 정의된 파일에서 필요한 모듈 불러오기 각 뮤테이션들은 db와 gql로 통신을 하며 db를 변경한다
//import { GraphQLObjectType, GraphQLSchema } from "graphql";
//import { GET_ALL_USERS } from './Queries/User';
//import { CREATE_USER } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS // 클라이언트가 /graphql로 들어오고 요청을 보냈을때 만약 해당 요청이 getAllUsers였다면 미리 데이터베이스와의 실질적인 기능을 정의한 모듈로 연결이되어 요청이 처리된다
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD
  }
})
//해당 스키마는 요청들이 정의되어 있다 그래서 /graphql로 접근되고 요청을 보내는 것들은 이 스키마에 있는 것들로 처리(데이터베이스와)가 된다
export const schema = new GraphQLSchema({ //스키마를 통하여 쿼리와 뮤테이션이 export된다
  query: RootQuery,
  mutation: Mutation
})
//이렇게 서버에서 데이터베이스와 연결되고 나서 사용될 요청들을 정의한다 
//요청의 이름과 각 요청의 이름에 매칭되는 실제 행동이 정의된 모듈들
//요청들은 쿼리와 뮤테이션을 나뉜다
//쿼리는 데이터베이스에 변경을 가하지 않고 값을 불러오는 용도로만
//뮤테이션을 데이터베이스에 값을 입력 수정 삭제를 위해 사용한다


//const RootQuery = new GraphQLObjectType({ //쿼리의 엔트리들을 모아두었다 /graphql로 접근이 됬을때 요청한 graphql을 살펴보고 있으면 연결하여 값을 반환한다.
//  name: "RootQuery", //쿼리의 묶음 이름 집합이름
//  fields: { //요청되는 쿼리의 이름과 실제 db와 해야하는 내용들을 정의한 이름
//    getAllUsers: GET_ALL_USERS,
//  },
//});

//const Mutation = new GraphQLObjectType({
//  name: "Mutation",   
//  fields: {
//    createUser: CREATE_USER,
//    deleteUser: DELETE_USER,
//    updatePassword: UPDATE_PASSWORD
//  }
//})

//export const schema = new GraphQLSchema({
//  query: RootQuery,
//  mutation: Mutation
//})

//const RootQuery = new GraphQLObjectType({
//  name: "RootQuery",
//  fields: {
//    getAllUsers: GET_ALL_USERS,
//  },
//});
//const Mutation = new GraphQLObjectType({
//  name: "Mutation",
//  fields: {
//    createUser: CREATE_USER,
//  }
//})
//
//export const schema = new GraphQLSchema({
//  query: RootQuery,
//  mutation: Mutation
//})