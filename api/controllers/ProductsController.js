'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    Products = mongoose.model('Products');

// // to get all the Territories
exports.GetProducts_By_PrescriberID_MarketID = (req, res) => {
    //RepEmail: req.params.RepEmail, MarketID: req.params.MarketID, TerritoryID: req.params.TerritoryID
    Products.find({}, 
    { IsDefault: 0, JobCode: 0, AddDate: 0, AddUser: 0, ChangeDate: 0, ChangeUser: 0, Deleted: 0 }, function (err, _products) {
        if (err)
            res.send(err);
        else {
            res.json(_products);
        }
    });
};

var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});

exports.GetProducts_By_PrescriberID_MarketID_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql = `
        SELECT	p.ProductID,
        p.ProductName,
        p.ProductKey,
        p.EnableCopay,
        p.CoPayLimit,
        p.IsDefault,
        p.LowResLogoLocation,
        p.HiResLogoLocation,
        p.OrderNo
        FROM	RepToPrescMsg r
        JOIN Products p ON r.ProductId = p.ProductID
        JOIN MessageType mt ON mt.MessageKey = r.MessageCategory
        -- And (mt.AppDeliveryTypeId & 1) <> 0 -- 1: Web
        WHERE	PrescriberID = ${req.params.PrescriberID} 
        AND MarketID = ${req.params.MarketID}	
        GROUP BY 
        p.ProductID,
        p.ProductName,
        p.ProductKey,
        p.EnableCopay,
        p.CoPayLimit,
        p.IsDefault,
        p.LowResLogoLocation,
        p.HiResLogoLocation,
        p.OrderNo
        ORDER BY 
        p.OrderNo`;

        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};
