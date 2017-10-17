var mongoose = require('mongoose');

var PrescriberSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
    RepEmail: {
        type: String,
        default: ''
    },
    TerritoryID: {
        type: Number,
        default: 0
    },
    TerritoryName: {
        type: String,
        default: ''
    },
    PrescriberID: {
        type: Number
    },
    LastName: {
        type: String,
        default: ''
    },
    FirstName: {
        type: String,
        default: ''
    },
    MarketID: {
        type: Number,
        default: 0
    },
    Display_Market: {
        type: String,
        default: ''
    },
    ProductID: {
        type: Number,
        default: 0
    },
    Prefix: {
        type: String,
        default: ''
    },
    Suffix: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('RepToTerrPresc', PrescriberSchema, 'RepToTerrPresc');