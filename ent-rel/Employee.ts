import { Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany} from "typeorm"
import {Photo} from './Photo'

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(()=>Photo,photo=>photo.employee)
    photos: Photo[];
  
}