import { Entity,Column,PrimaryGeneratedColumn, ManyToMany,JoinTable} from "typeorm"
import {Category} from './Category'

@Entity()
export class Question{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;


    @Column()
    text:string;

    @ManyToMany(()=>Category) 
    @JoinTable({
        name:'ques_cat',
        joinColumn:{
            name:'question',
            referencedColumnName:"id"
        },
        inverseJoinColumn:{
            name:"category",
            referencedColumnName:"id"
        }
    }) 
    categories: Category[];
  
}