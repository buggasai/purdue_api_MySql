var mongoose = require('mongoose');

var TerriotorySchema = new mongoose.Schema({
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
    ProductName: {
        type: String,
         default: ''
    }
});

module.exports = mongoose.model('RepToTerritory', TerriotorySchema,'RepToTerritory');