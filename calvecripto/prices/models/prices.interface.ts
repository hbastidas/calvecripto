import { Document } from 'mongoose';

// tslint:disable-next-line:class-name
export interface cy_coin_prices extends Document {
    symbol: string;
    satoshi_buy: number;
    satoshi_sell: number;
    vol: number;
    prices: any;
    date: Date;
}
