import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { CurrentRateModule } from './currentRate/currentRate.module';
import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './orm-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(ormConfig),
    TransactionsModule,
    CurrentRateModule,
    CacheModule.register({
      ttl: 60000,
      max: 10,
      isGlobal: true,
    }),
  ],
  controllers: [],
})
export class AppModule {}
