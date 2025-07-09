const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const basketDetailsSchema = new mongoose.Schema({
  cmp: Number,
  exch: String,
  exchType: String,
  scripCode: Number,
  symbol: String,
  expiry: Number,
  strikePrice: Number,
  optionType: String,
  advisoryCreatedOn: String,
  typeOfTrade: String,
  callType: String,
  callCloseDateTime: String,
  lotSize: Number,
  cpType: String,
  callType: String,
});

const basketAdvisorySchema = new mongoose.Schema(
  {
    advisorNameId: String,
    advisoryType: String,
    ltpPrice: Number,
    targetPrice: Number,
    stopLossPrice: Number,
    basketName: String,
    entryPrice: Number,
    basketDetails: [basketDetailsSchema],
    targetPriceModified: Number,
    stopLossPriceModified: Number,
    maxProfit: Number,
    maxLoss: Number,
    telegramGroups: [Schema.Types.Mixed],
    view: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('BasketAdvisory', basketAdvisorySchema);
