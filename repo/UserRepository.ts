 import {EntityRepository,AbstractRepository,EntityManager } from 'typeorm'

 import {User} from '../entity/User'

 @EntityRepository(User)

//  export class UserRepo extends AbstractRepository<User>{

//     customSave(name: string,email: string){
//         const user = new User();
//         user.name =  name;
//         user.email = email;
//         return this.manager.save(user)
//     } 
//     findByNameAndEmail(name: string,email: string){
//         return this.repository.findOne({name,email})
//     }
//  }


export class UserRepo{
    constructor(private manager: EntityManager){

    }

    customSave(name: string,email: string){
        const user = new User();
        user.name =  name;
        user.email = email;
        return this.manager.save(user)
    } 
    findByNameAndEmail(name: string,email: string){
        return this.manager.findOne(User,{name,email})
    }
 }