import { Expose } from 'class-transformer';

export class ResponseTransactionDto {
  @Expose()
  id: number;

  @Expose()
  amountInEur: number;

  @Expose()
  amountInPln: number;

  @Expose()
  currencyRate: number;
}
