const Joi = require("joi");

const basketDetailSchema = Joi.object({
  cmp: Joi.number().strict().required(),
  exch: Joi.string().required(),
  exchType: Joi.string().required(),
  scripCode: Joi.number().strict().required(),
  symbol: Joi.string().required(),
  expiry: Joi.number().strict().required(),
  strikePrice: Joi.number().strict().required(),
  optionType: Joi.string().required(),
  advisoryCreatedOn: Joi.string().required(),
  typeOfTrade: Joi.string().required(),
  callType: Joi.string().required(),
  callCloseDateTime: Joi.string().allow("").required(),
  lotSize: Joi.number().strict().required(),
  cpType: Joi.string().required(),
  callType:Joi.string().required()
});

const addBasketAdvisorySchema = Joi.object({
  advisorNameId: Joi.string().required(),
  advisoryType:Joi.string().required(),
  ltpPrice: Joi.number().strict().required(),
  targetPrice: Joi.number().strict().required(),
  stopLossPrice: Joi.number().strict().required(),
  basketName: Joi.string().required(),
  entryPrice: Joi.number().strict().required(),
  basketDetails: Joi.array().items(basketDetailSchema).min(1).required(),
  targetPriceModified: Joi.boolean().required(),
  stopLossPriceModified: Joi.boolean().required(),
  maxProfit: Joi.number().allow(null).strict().required(),
  maxLoss: Joi.number().allow(null).strict().required(),    // optional; will be calculated
  telegramGroups: Joi.array().items(Joi.number().strict()).required(),
  view : Joi.string().required(),
});

module.exports = {
  addBasketAdvisorySchema,
};