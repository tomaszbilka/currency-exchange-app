import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CurrentRateService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  onModuleInit() {
    console.log('init rate requests loop');
    this.getCurrentRate();

    setInterval(() => {
      this.getCurrentRate();
    }, 5000);
    //60000
  }

  private async getCurrentRate() {
    try {
      const currentRate = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('CURRENCY_API_ENDPOINT'),
          {
            headers: {
              'X-API-KEY': this.configService.get<string>('CURRENCY_API_KEY'),
            },
          },
        ),
      );

      await this.cacheManager.set(
        'currentRate',
        currentRate.data.exchange_rate,
      );
    } catch (error) {
      console.error('Error getting current rate: ', error);
    }
  }
}
