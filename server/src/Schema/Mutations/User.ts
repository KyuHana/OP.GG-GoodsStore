import { GraphQLID, GraphQLString } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from '../TypeDefs/Message';
import { Users } from '../../Entities/Users';

//import {GraphQLString } from 'graphql';
//import { UserType } from '../TypeDefs/User';
//import {Users} from '../../Entities/Users';

export const CREATE_USER = {
  type: MessageType, //반환형태
  args: { //인자형태
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({
      name,
      username,
      password
    })
    return { successful: true, message: "add new user" }
  }
}

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args
    const user = await Users.findOne({username: username})
    const userPassword = user?.password;
    console.log(user);  
    if(user !== undefined) {
      if(oldPassword === userPassword) {
        //비밀번호 변경
        await Users.update( //업데이트된 컬럼을 반환환다
          {username: username},
          {password: newPassword}
        );
        return { successful: true, message: "password successfully changed"}
      } 
      else {  
        throw new Error("is it right password? password do not match")
      }
    }
    else {
      throw new Error("invalid username check again username")
    }
    
  }
}

export const DELETE_USER = {
  type: MessageType, //반환 형태
  args: { //받은 인자의 형태
    id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) { //헹동
    const id = args.id
    await Users.delete(id)
    return {success: true, message: "delete user successfully"}
  }
}
//export const CREATE_USER = {
//  type: UserType,
//  args: {
//    name: { type: GraphQLString },
//    username: { type: GraphQLString },
//    password: { type: GraphQLString },
//  },
//  async resolve(parent: any, args: any) {
//    const { name, username, password } = args
//    await Users.insert({name, username, password})
//    return args
//  }
//}