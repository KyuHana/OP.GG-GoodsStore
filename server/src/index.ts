import express from 'express'; //서버 모듈
import { graphqlHTTP } from 'express-graphql'; //postman과 같은 중간다리 클라이언트와 서버사이의
import cors from 'cors'; //restapi로 통신할 경우 야기되는 cors에러 방지
import { createConnection } from 'typeorm'; //생성된 db와 통신을 위한 
import { schema } from "./Schema"; //graphql통신을 위한 정보가 들어있는
import { Users } from "./Entities/Users"; //데이터베이스 테이블 형식

//import express from 'express';
//import { graphqlHTTP } from 'express-graphql'; //graphql을 이용한 데이터베이스 통신기능 제공 nodemon같은
//import cors from 'cors';
//import { createConnection } from 'typeorm';
//import { schema } from "./Schema";
//import { Users } from "./Entities/Users";

const main = async () => {
  //생성된 db와 통신 
  //연결이 완료된 후 진행
  await createConnection({ 
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "tn74467446@",
    logging: true,
    synchronize: false,
    entities: [Users]
  });
  const app  = express();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
  app.listen(3001, () => {
    console.log("server running on port 3001");
  })
}

//const main = async () => {
//  await createConnection({
//    type: "mysql",
//    database: "GraphqlCRUD",
//    username: "root",
//    password: "tn74467446@",
//    logging: true,
//    synchronize: false,
//    entities: [Users]
//  });
//  const app = express();
//  app.use(cors());
//  app.use(express.json())
//  app.use("/graphql", graphqlHTTP({
//    schema,
//    graphiql: true
//  }))
//
//  app.listen(3001, () => {
//    console.log("server running on port 3001");
//  })
//}

main().catch((err) => {
  console.log(err)
})
