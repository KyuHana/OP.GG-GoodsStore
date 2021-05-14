import express from 'express'; //서버 모듈
import { graphqlHTTP } from 'express-graphql'; //postman과 같은 중간다리 클라이언트와 서버사이의
import cors from 'cors'; //다른 원천과 통신할때 발생하는 cors에러를 해결해준다
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
  //async를 쓰는 이유는 비동기되는 처리들을 동기적으로 처리하기위해서 사용한다고 볼수 있다
  //async를 써야 await을 사용하여 동기적으로 코드가 사용되도록 할 수 있다.
  await createConnection({ //createConnection을 사용하여 내가 실행시켜놓은 데이터베이스와 이 해당서버가 서로 통신이 되도록 할 수 있다.
    type: "mysql", //mysql데이터베이스를 사용한다
    database: "GraphqlCRUD", //그 해당 데이터베이스의 이름은 GraphqlCRUD이다
    username: "root", //그 데이터베이스에 접근하는 유저의 이름은 root이다
    password: "tn74467446@", //데이터베이스에 접근할 때의 비밀번호이다
    logging: true, //error나 warn등의 로그들을 어디에다 저장한다
    synchronize: false, //테이블이 한번 생성될때만 사용하자 그 이후로는 db안에 관계가 다 형성이 되어있기에 false로 정의
    entities: [Users] //테이블 생성
  })
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema, // /graphql로 접근이 되면 클라와 서버의 중간에서 graphqlHTTP를 사용하여 제공받은 schema 그러니까 쿼리와 뮤테이션들이 정의된 파일을 전달한다.
    graphiql: true
  }));
  app.listen(3001, () => {
    console.log('server running on port 3001');
  })
} 

//const main = async () => {
//  //생성된 db와 통신 
//  //연결이 완료된 후 진행
//  await createConnection({ 
//    type: "mysql",
//    database: "GraphqlCRUD",
//    username: "root",
//    password: "tn74467446@",
//    logging: true,
//    synchronize: false,
//    entities: [Users]
//  });
//  const app  = express();
//  app.use(cors());
//  app.use(express.json());
//  app.use('/graphql', graphqlHTTP({
//    schema,
//    graphiql: true
//  }))
//  app.listen(3001, () => {
//    console.log("server running on port 3001");
//  })
//}
//
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
