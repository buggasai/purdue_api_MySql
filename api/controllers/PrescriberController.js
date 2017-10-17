'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    Prescriber = mongoose.model('RepToTerrPresc');

// // to get all the Territories
exports.GetPrescriber_By_Email_MarketID_TerritoryID = (req, res) => {
    Prescriber.find({ RepEmail: req.params.RepEmail, MarketID: req.params.MarketID, TerritoryID: req.params.TerritoryID },
        { id: 0, RepEmail: 0 }, function (err, _territory) {
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
exports.GetPrescriber_By_Email_MarketID_TerritoryID_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql = `
        
        SELECT  t.TerritoryID ,
        t.TerritoryName ,
        p.PrescriberID ,
        LastName ,
        LTRIM(FirstName) AS FirstName,
        mt.MarketID ,
        mt.DisplayMarket AS Display_Market,
        Prefix ,
        Suffix
FROM    RepToTerrPresc p
JOIN RepToTerritory t ON p.TerritoryID = t.TerritoryID
JOIN RepToPrescMsg rp ON p.PrescriberID = rp.PrescriberID 
JOIN MarketType mt ON t.MarketID = mt.MarketID
WHERE   rp.RepEmail = '${req.params.RepEmail}'
        AND t.TerritoryID = ${req.params.TerritoryID}
        AND t.MarketID = ${req.params.MarketID}
ORDER BY t.TerritoryName ,
        p.LastName ,
        p.FirstName;
        `;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};