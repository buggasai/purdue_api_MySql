var mongoose = require('mongoose');

var MarketShema = new mongoose.Schema({
    MarketIdentity: {
        type: Number
    },
    MarketID: {
        type: Number
    },
    DisplayMarket: {
        type: String
    },
    IsDefault: {
        type: Number
    },
    OrderNo: {
        type: Number
    },
    AddDate: {
        type: Date
    },
    AddUser: {
        type: String
    },
    ChangeDate: {
        type: Date
    },
    ChangeUser: {
        type: String
    },
    Deleted: {
        type: Number
    },
    Territory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TerriotorySchema' }]
});

module.exports = mongoose.model('MarketType', MarketShema, 'MarketType');