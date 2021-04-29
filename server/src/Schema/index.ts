//graphql에 사용될 모든 것들을 모아두어 사용한다
//여기서는 안내만 하는 페이지
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User';
//import { GraphQLObjectType, GraphQLSchema } from "graphql";
//import { GET_ALL_USERS } from './Queries/User';
//import { CREATE_USER } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",   
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

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