import { Entity,Column,PrimaryGeneratedColumn,ChildEntity} from "typeorm"
import {Content} from './Content'

@ChildEntity()
export class Question extends Content{
  
    @Column()
    quescount:string;
}