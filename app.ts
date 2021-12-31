 import express,{Request,Response} from "express"
 import { createConnection } from "typeorm"
 //import {User} from './entity/User'
 
 import {router} from './routes/routes'
 const app = express();
 const PORT = 4011;  
  
 app.use('/',router)
  
//  createConnection({
//      type:"mysql",
//      host:"localhost",
//      port:3306,
//      username:"root",
//      password:"root",
//      database:"about",
//      synchronize:false,
//      entities:['./ent-rel/*.ts'],
//     // entities:[User],
//      logging:true,
//      "migrationsTableName": "custom_migration_table",
//     "migrations": ["migration/*.js"],
//     "cli": {
//         "migrationsDir": "migration"
//     }
//  }).then(()=>{
//      console.log("DB Connected")
//  }).catch((e)=>{
//      console.log("Error:"+e)
//  }) 
 


 createConnection().then(()=>{
    console.log("DB Connected")
    }).catch((e)=>{
        console.log("Error:"+e)
    }) 

 app.get('/test',(req:Request,resp:Response)=>{
     resp.json({
         data:"test done"
     })
 })

 app.listen(PORT,():void=>{
    console.log("Server is running on "+PORT)
 })