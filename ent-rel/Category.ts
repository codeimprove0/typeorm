import { Entity,Column,PrimaryGeneratedColumn, ManyToMany} from "typeorm"
import {Question} from './Question'

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToMany(()=>Question,question=>question.categories) 
    question: Question;
  
}