var mongoose = require('mongoose');

var PrescriberMsgSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
    RepEmail: {
        type: String,
        default: ''
    },
    MarketID: {
        type: Number,
        default: 0
    },
    RunID: {
        type: Number,
        default: 0
    },
    PrescriberID: {
        type: Number
    },
    MessageCode: {
        type: String,
        default: ''
    },
    MessageRank: {
        type: Number
    },
    MainMessage: {
        type: String,
        default: ''
    },
    TableHeader: {
        type: String,
        default: ''
    },
    RanPer: {
        type: Number,
        default: 0
    },
    StateName: {
        type: String,
        default: ''
    },
    ProductID: {
        type: Number,
        default: 0
    },
    ProductName: {
        type: String
    },
    Display_Market: {
        type: String,
        default: ''
    },
    MessageCategory: {
        type: String,
        default: ''
    },
    StaticWinMessage: {
        type: String,
        default: 0
    },
    CompAccessPer: {
        type: String,
        default: ''
    },
    CompProducts: {
        type: String,
        default: ''
    },
    ChartType: {
        type: String,
        default: ''
    },
    StaticWinMessageIPad: {
        type: String,
        default: ''
    },
    MessagePlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PrescriberMsgPlansSchema' }]
});

module.exports = mongoose.model('RepToPrescMsg', PrescriberMsgSchema, 'RepToPrescMsg');