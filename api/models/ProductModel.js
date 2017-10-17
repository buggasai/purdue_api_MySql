var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    ProductID: {
        type: Number,
        default: 0
    },
    ProductName: {
        type: String,
        default: ''
    },
    ProductKey: {
        type: String,
        default: 0
    },
    EnableCopay: {
        type: Number
    },
    CoPayLimit: {
        type: Number
    },
    LowResLogoLocation: {
        type: String,
        default: ''
    },
    HiResLogoLocation: {
        type: String,
        default: ''
    },
    IsDefault: {
        type: Number,
        default: 0
    },
    JobCode: {
        type: String,
        default: ''
    },
    OrderNo: {
        type: Number,
        default: 0
    },
    AddDate: {
        type: Date,
        default: ''
    },
    AddUser: {
        type: String,
        default: ''
    },
    ChangeDate: {
        type: Date,
        default: ''
    },
    ChangeUser: {
        type: String,
        default: ''
    },
    Deleted: {
        type: Number
    }
});

module.exports = mongoose.model('Products', ProductSchema, 'Products');