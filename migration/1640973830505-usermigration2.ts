import {MigrationInterface, QueryRunner} from "typeorm";

export class usermigration21640973830505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `bids` INT NOT NULL AFTER `name`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE user DROP bids")
    }

}
