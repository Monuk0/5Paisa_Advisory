const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const advisorySchema = new mongoose.Schema({
    advisorNameId: String,
    advisoryType:String,
    buySell: String,
    scripName: String,
    scripCode: Number,
    exch: String,
    exchType: String,
    callPublishPrice: Number,
    entryPrice: Number,
    exitPrice: Number,
    stopLossPrice: Number,
    exitPriceModified: Boolean,
    entryPriceModified: Boolean,
    delIntraday: String,
    stopLossPriceModified:Boolean,
    telegramGroups: [Schema.Types.Mixed],
},
{ timestamps: true });

module.exports = mongoose.model('Advisory', advisorySchema);
