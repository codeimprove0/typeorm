import {MigrationInterface, QueryRunner} from "typeorm";

export class usermigration1640973569488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `bid` INT NOT NULL AFTER `name`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE user DROP bid")
    }

}
