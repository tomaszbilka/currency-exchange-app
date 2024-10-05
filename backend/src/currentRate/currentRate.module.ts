import { Module } from '@nestjs/common';
import { CurrentRateService } from './currentRate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [CurrentRateService],
  exports: [CurrentRateService],
})
export class CurrentRateModule {}
