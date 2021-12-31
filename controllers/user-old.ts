import {Request,Response} from 'express'
import {User} from '../entity/User'
// import {Between, Equal, getManager,getRepository,In,IsNull,LessThan,LessThanOrEqual,Like,Not} from 'typeorm'

import { getManager,getRepository,getCustomRepository} from 'typeorm'
import {UserRepo} from '../repo/UserRepository'


const homeDetailOLD = async (req:Request,resp:Response)=>{

    const entityManager = getManager();
    // ----- Insert --/
    // let data = await entityManager.insert(User,{
    //     name:'demo',
    //     email:'demo@gmail.com',
    //     phone:'9988978778'
    // })

    //------Save ----//
    // let user = new User();
    // user.name = 'dummy';
    // user.email = 'dummy@gmail.com'
    // let data  = await entityManager.save(user);

    //---- Update --//
  //  let data = await entityManager.update(User,2,{email:'mytest@gmail.com'})

  /// ---- Delete ---/
  //let data = await entityManager.delete(User,3);

  //--- all Find ---//
  //let data = await entityManager.find(User);

  // -- find by id ---
 // let data  = await entityManager.findOne(User,1);

 // ---- truncate --
    let data = await entityManager.clear(User);

    resp.json({
        test:'ok',
        data:data
    })
}
 



const homeDetailRepo = async (req:Request,resp:Response)=>{

    const repository = getRepository(User);
    // ----- Insert --/
    // let data = await repository.insert({
    //     name:'demo',
    //     email:'demo@gmail.com',
    //     phone:'9988978778'
    // })

    //------Save ----//
    //  let user = new User();
    //  user.name = 'dummy';
    //  user.email = 'dummy@gmail.com'
    //  let data  = await repository.save(user);

    //---- Update --//
   // let data = await repository.update(2,{email:'mytest@gmail.com'})

  /// ---- Delete ---/
  //let data = await repository.delete(3);

  //--- all Find ---//
  //let data = await repository.find({name:'demo'});
  //let data = await repository.findOne({name:'demo'});
 
 // ---- truncate --
    let data = await repository.clear();

    resp.json({
        test:'ok',
        data:data
    })
}
  

const homeDetail_Repo = async (req:Request,resp:Response)=>{

    const repository = getRepository(User);

    //------ select ---//
    // let data = await repository.find({
    //     select:["name","id"]
    // })

    //------ where -----

    // let data = await repository.find({
    //     where :{
    //         name:'ram',phone:'91'
    //     }
    // })
   
    //-------OR -------//
    // let data = await repository.find({
    //     where :[{
    //         name:'ram',phone:'91'
    //     },{
    //         name:"mahesh"
    //     }]
    // })

    //--------Order, skip,take -------//
    // let data = await repository.find({
    //     order:{
    //         id:"DESC",
    //         //name:"ASC"
    //     },
    //     skip:1,
    //     take:3
    // })

    //------- NOT,LessThan -------//


    let data = await repository.find({
       // name:Not("ram")
     //  id: Equal(3)
      //  name:Like('%ra%')
       // id: Between(1,4)
       //name: In(["ram","mahesh"])
      // phone:IsNull()
    })

    
    resp.json({
        test:'ok',
        data
    })
}

 
const homeDetail_CustomRep = async (req:Request,resp:Response)=>{
    const UserRepository = getCustomRepository(UserRepo);

    let data = await UserRepository.customSave("myData2","testdata2@gmail.com");
  // let data = await UserRepository.findByNameAndEmail("myData","testdata@gmail.com");
    resp.json({
        test:'ok',
        data
    })
}



import {Category} from '../ent-rel/Category'
import {Question} from '../ent-rel/Question'
import {Profile} from '../ent-rel/Profile' 


const homeDetail = async (req:Request,resp:Response)=>{   

    resp.json({
        test:'ok' 
    })
}

export {
    homeDetail
}