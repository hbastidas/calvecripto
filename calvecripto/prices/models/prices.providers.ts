import { Connection } from 'mongoose';
import { PricesShema } from './prices.schema';

export const pricesProviders = [
  {
    provide: 'CoinPricesModel',
    useFactory: (connection: Connection) => connection.model('cy_coin_prices', PricesShema),
    inject: ['DataBaseConnection'],
  },

];
