import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ResponseTransactionDto } from './dto/response-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('current-rate')
  async getCurrentRate() {
    return await this.transactionsService.getCurrentRate();
  }

  @Post()
  @Serialize(ResponseTransactionDto)
  async getTransaction(@Body() body: CreateTransactionDto) {
    return await this.transactionsService.createTransaction(body);
  }
}
