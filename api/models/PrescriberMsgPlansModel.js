var mongoose = require('mongoose');

var PrescriberMsgPlansSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
    RepEmail: {
        type: String,
        default: ''
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
    PlanID: {
        type: Number
    },
    PlanName: {
        type: String
    },
    BenType: {
        type: String,
        default: ''
    },
    Tier: {
        type: String,
        default: ''
    },
    Restriction: {
        type: String,
        default: ''
    },
    WinLossFlag: {
        type: String,
        default: ''
    },
    PlanRank: {
        type: Number,
        default: 0
    },
    Co_Pay: {
        type: String
    },
    MinPrintPlans: {
        type: Number,
        default: 0
    },
    PlanClass: {
        type: String,
        default: ''
    },
    NoPrint: {
        type: String,
        default: 0
    },
    ProductID: {
        type: Number,
        default: 0
    },
    ProductName: {
        type: String,
        default: ''
    },
    MessageCategory: {
        type: String,
        default: ''
    },
    CompTier1: {
        type: String,
        default: ''
    },
    CompTier1: {
        type: String,
        default: ''
    },
    CompTier2: {
        type: String,
        default: ''
    },
    CompTier3: {
        type: String,
        default: ''
    },
    PlanProdPer: {
        type: String,
        default: ''
    },
    FormularyCategory: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('RepToPrescMsgPlans', PrescriberMsgPlansSchema, 'RepToPrescMsgPlans');