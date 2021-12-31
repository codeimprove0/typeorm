import { Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany, ManyToOne} from "typeorm"
import {Employee} from './Employee'

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url:string;

    @ManyToOne(()=>Employee,employee=>employee.photos)
   // @JoinColumn({name:'emp_id'})
    employee: Employee;
  
}