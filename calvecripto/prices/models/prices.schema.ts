import * as mongoose from 'mongoose';
import Joigoose = require('joigoose');
import * as Joi from 'joi';

const options: Joi.ValidationOptions = {abortEarly: true};
const joigoose = Joigoose(mongoose, options);

/* cy_prices  */

const joiCoinSchema = Joi.object({
    symbol: Joi.string().max(4).min(3).required(),
    satoshi_buy: Joi.number(),
    satoshi_sell: Joi.number(),
    vol: Joi.number(),
    prices: Joi.any(), // precio local y precio en dolares para el pais correspondiente
    date: Joi.date().default(Date.now() * 1000),
});
export const PricesShema = new mongoose.Schema(joigoose.convert(joiCoinSchema));
