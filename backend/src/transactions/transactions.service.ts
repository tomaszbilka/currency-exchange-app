import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionsRepository: Repository<TransactionEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  public async getCurrentRate() {
    const currentRate = await this.getCachedRate();
    return { currentRate };
  }

  public async createTransaction({ value }: CreateTransactionDto) {
    if (!value) {
      throw new HttpException('Value is required', HttpStatus.BAD_REQUEST);
    }

    const rate = await this.getCachedRate();

    const newTransaction = this.transactionsRepository.create({
      amountInEur: value,
      amountInPln: +(value * rate).toFixed(2),
      currencyRate: rate,
    });

    return this.transactionsRepository.save(newTransaction);
  }

  private async getCachedRate() {
    const cachedRate = await this.cacheManager.get<number>('currentRate');

    if (!cachedRate) {
      throw new HttpException(
        'Cached rate not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return cachedRate;
  }
}
