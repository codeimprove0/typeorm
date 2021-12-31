import {Request,Response} from 'express' 
import { getManager,getRepository,getConnection } from 'typeorm'  

import {User} from '../ent-rel/User'
import {Profile} from '../ent-rel/Profile' 
 
import {Employee} from '../ent-rel/Employee'
import {Photo} from '../ent-rel/Photo'

import {Category} from '../ent-rel/Category'
import {Question} from '../ent-rel/Question'
  

const homeDetail_relation = async (req:Request,resp:Response)=>{  
    
    const entityManager = getManager(); 

    // ######## One To One #######
    // const profile = new Profile();
    // profile.gender=  'Male';
    // profile.photo = 'xyz.jpg';

    // let data  = await entityManager.save(profile);

    // const user = new User();
    // user.name = 'Demo';
    // user.profile = profile;
    // await entityManager.save(user);

    // ######### One to Many && Many To One ###### 
    
  /*   const employee = new Employee();
    employee.name = 'Test';
    await entityManager.save(employee)

    const p1 = new Photo();
    p1.url = "demo1.jpg";
    p1.employee = employee;
    await entityManager.save(p1);

    const p2 = new Photo();
    p2.url = "dummy.jpg";
    p2.employee = employee;  
    await entityManager.save(p2); */


/*     const p1 = new Photo();
    p1.url = "demo2.jpg"; 
    await entityManager.save(p1);

    const p2 = new Photo();
    p2.url = "dummy2.jpg";  
    await entityManager.save(p2); 

    const employee = new Employee();
    employee.name = 'Test2';
    employee.photos = [p1,p2];
    await entityManager.save(employee)
 */

    //###### Many To Many ###### 

    const c1 = new Category();
    c1.name = "A";
    await entityManager.save(c1);

    const c2 =  new Category();
    c2.name = "B";
    await entityManager.save(c2);

    const c3 =  new Category();
    c3.name = "C";
    await entityManager.save(c3);


    const q1 = new Question();
    q1.text = "Last Test";
    q1.title = "Last Test";
    q1.categories = [c1,c2,c3];
    await entityManager.save(q1);

    resp.json({
        test:'Many To Many' 
    })
}

const homeDetail_relation_find = async (req:Request,resp:Response)=>{  
    
    const entityManager = getManager(); 
    
    //######### One To One ######
    // let repo = getRepository(User);
    // let data = await repo.find({relations:["profile"]});

    // let repo = getRepository(Profile);
    // let data = await repo.find({relations:["user"]});

    // let data = await entityManager
    // .getRepository(Profile)
    // .createQueryBuilder("profile")
    // .leftJoinAndSelect("profile.user","user")
    // .getMany();

    
    // let data = await entityManager
    // .getRepository(User)
    // .createQueryBuilder("user")
    // .leftJoinAndSelect("user.profile","profile")
    // .getMany();

    //------One To Many ------
    // let repo = getRepository(Employee);
    // let data = await repo.find({relations:["photos"]});

    // let repo = getRepository(Photo);
    // let data = await repo.find({relations:["employee"]});

    // let data = await entityManager
    // .getRepository(Employee)
    // .createQueryBuilder("employee")
    // .leftJoinAndSelect("employee.photos","photo")
    // .getMany();

    // let data = await entityManager
    // .getRepository(Photo)
    // .createQueryBuilder("photo")
    // .leftJoinAndSelect("photo.employee","employee")
    // .getMany();


    //######## Many To Many ########

    let quesRepp = entityManager.getRepository(Question)
    let data = await quesRepp.find({relations:["categories"]})


    resp.json({
        test:'Many To Many',
        data
    })
}

const homeDetail = async (req:Request,resp:Response)=>{  
    
    const entityManager = getManager(); 

    // ######## Select ######
    // let data = await entityManager
    // .createQueryBuilder()
    // .select("u")
    // .from(User,"u")

    // .getManyAndCount();
    //.getRawMany();
  //  .getOne();
    //.getMany();

    // let data = await entityManager
    // .getRepository(User)
    // .createQueryBuilder("u") 
    // .where("u.id =:id OR name =:mname",{id:1,mname:"Demo"})
    // .orWhere("u.name =:name",{name:"demo"})
    // .orderBy("u.name")
    // .limit(1)
    // .offset(1)
    // .getMany();  


    // let data = await entityManager
    // .getRepository(User)
    // .createQueryBuilder("u") 
    // .leftJoinAndSelect("u.profile","profile","profile.gender =:gender",{gender:"Male"})
    // .where("u.id =:id OR name =:mname",{id:1,mname:"Demo"})
    // .orWhere("u.name =:name",{name:"demo"})
    // .orderBy("u.name")
    // .limit(1)
    // .offset(1)
    // .getMany();  

    // ######## Insert #######
    
   /*  let data = await entityManager
    .createQueryBuilder()
    .insert()
    .into(Employee)
    .values([
        {
            name:"Mahesh"
        },{
            name:'Seeta'
        }
    ])
    .execute(); */


    // ########Update #######

    // let data = await entityManager
    // .createQueryBuilder()
    // .update(Employee) 
    // .set({ name :'Mahesh Singh'})
    // .where("id=:id",{id:7})
    // .execute();

    // ######## Delete #####

    let data = await entityManager
    .createQueryBuilder()
    .delete() 
    .from(Employee) 
    .where("id=:id",{id:7})
    .execute();


     
    resp.json({
        test:'Query Builder', 
        data
    })
}

export {
    homeDetail
}