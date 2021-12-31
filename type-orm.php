

TypeORM


TypeORM is an ORM

Entities and columns.

Associations (relations).
    one-to-one relation
    Many-to-One and One-to-Many
    many-to-many relation

    
Transactions
Migrations and automatic migrations generation

Supports MySQL / MariaDB / Postgres / CockroachDB / 
    SQLite / Microsoft SQL Server / Oracle / SAP Hana /
    / MongoDB NoSQL database.

    
    Custom Query

 
    Node Js typescript : 



    Also, make sure you are using TypeScript version 3.3 or higher,
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
     "emitDecoratorMetadata": true,     

     reflect-metadata Allows you to do runtime reflection on types.

     Step: 1

    1) npm init --y
    2) tsc --init
    3) npm i  express @types/express nodemon ts-node @types/node typescript
    4) npm i mysql2 typeorm  reflect-metadata

    Step : 2

    "strictPropertyInitialization": false,


    Migration:- 

    typeorm migration:create -n PostRefactoring

    npm run typeorm migration:generate -- -o -n init

    await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" TO "first_name"`);
 ts-node ./node_modules/typeorm/cli.js migration:run

 typeorm migration:create -n myMigrations
