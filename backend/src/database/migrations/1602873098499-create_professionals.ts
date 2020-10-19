import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createProfessionals1602873098499
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professionals',
        columns: [
          {
            name: 'id',
            type: 'varchar(6)',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(50)',
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'whatsapp',
            type: 'varchar(11)',
          },
          {
            name: 'knowledges',
            type: 'varchar(50)[]',
          },
          {
            name: 'bio',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professionals');
  }
}
