import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTransactions1728112721733 implements MigrationInterface {
  name = 'AddTransactions1728112721733';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "amountInEur" numeric(10,2) NOT NULL, "amountInPln" numeric(10,2) NOT NULL, "currencyRate" numeric(10,4) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transactions"`);
  }
}
