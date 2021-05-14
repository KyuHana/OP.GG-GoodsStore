//Users라는 테이블을 가진 레코드의 컬럼을 정의를 한다
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"; //객체를 테이블 형탸로 변경시켜준다

@Entity() //시작점
export class Users extends BaseEntity { //users 테이블을 가지는 레코드의 컬럼들을 정의 완료 
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
//import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
//
//@Entity()
//export class Users extends BaseEntity {
//  @PrimaryGeneratedColumn()
//  id!: number;
//
//  @Column()
//  name!: string;
//
//  @Column()
//  username!: string;
//
//  @Column()
//  password!: string;
//}