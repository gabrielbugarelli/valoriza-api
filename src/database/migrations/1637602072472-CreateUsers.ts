import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1637602072472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid'
            },

            {
              name: 'email',
              type: 'varchar'
            },

            {
              name: 'password',
              type: 'varchar'
            },

            {
              name: 'admin',
              type: 'boolean',
              default: 'false'
            },

            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },

            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }
}
