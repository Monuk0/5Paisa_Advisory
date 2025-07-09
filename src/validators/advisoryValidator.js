const Joi = require('joi');

const addAdvisorySchema = Joi.object({
  advisorNameId: Joi.string().required(),
  advisoryType: Joi.string().required(),
  buySell: Joi.string().required(),
  scripName: Joi.string().required(),
  scripCode: Joi.number().strict().required(),
  exch: Joi.string().required(),
  exchType: Joi.string().required(),
  callPublishPrice: Joi.number().strict().required(),
  entryPrice: Joi.number().strict().required(),
  exitPrice: Joi.number().strict().required(),
  stopLossPrice: Joi.number().strict().required(),
  exitPriceModified: Joi.boolean().required(),
  entryPriceModified: Joi.boolean().required(),
  delIntraday: Joi.string().required(),
  stopLossPriceModified: Joi.boolean().required(),
  telegramGroups: Joi.array().items(Joi.number().strict()).required(),
});

module.exports = {
  addAdvisorySchema,
};
