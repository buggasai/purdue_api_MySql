'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    Territory = mongoose.model('RepToTerritory');

// // to get all the Territories
exports.GetTerritories_By_Email_MarketID = (req, res) => {
    Territory.find({ RepEmail: req.params.RepEmail, MarketID: req.params.MarketID },
        { TerritoryID: 1, TerritoryName: 1, MarketID: 1, Display_Market: 1 }, function (err, _territory) {
            if (err)
                res.send(err);
            else {
                res.json(_territory);
            }
        });
};


var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});

exports.GetTerritories_By_Email_MarketID_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql = `SELECT	TerritoryID,
        CONCAT(TerritoryName,'-',TerritoryID) AS TerritoryName,MarketID,Display_Market FROM	RepToTerritory
         WHERE RepEmail = '${req.params.RepEmail}' AND MarketId = ${req.params.MarketID}
           GROUP BY TerritoryID,TerritoryName,MarketID,Display_Market
        ORDER BY TerritoryName;`;
        
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};


