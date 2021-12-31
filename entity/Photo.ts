import { Entity,Column,PrimaryGeneratedColumn,ChildEntity} from "typeorm"
import {Content} from './Content'

@ChildEntity()
export class Photo extends Content{
 
    // @Column()
    // size:string;
}