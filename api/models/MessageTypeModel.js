var mongoose = require('mongoose');

var MessageTypeSchema = new mongoose.Schema({
    CampaignTypeIdentity: {
        type: Number,
        default: 0
    },
    Title: {
        type: String,
        default: ''
    },
    Description: {
        type: String,
        default: 0
    },
    MessageKey: {
        type: String
    },
    HasDrillDown: {
        type: Number
    },
    IsEnabled: {
        type: Number,
        default: ''
    },
    IsLocationBound: {
        type: Number,
        default: ''
    },
    AppDeliveryTypeId: {
        type: Number,
        default: 0
    },
    OrderNo: {
        type: Number
    },
    CssClass: {
        type: String,
        default: ''
    },
    MinPlans: {
        type: Number
    },
    MaxPlans: {
        type: Number
    },
    AddDate: {
        type: Date,
        default: ''
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
    PrescriberMsg: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RepToPrescMsg' }]

});

module.exports = mongoose.model('MessageType', MessageTypeSchema, 'MessageType');