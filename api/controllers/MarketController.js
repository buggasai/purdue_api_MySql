'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    MarketType = mongoose.model('MarketType');
//mysqlMarketType = mysql.model('MarketType');

exports.GetMarkets_By_EmailID = (req, res) => {
    MarketType.aggregate([
        {
            $lookup:
            {
                from: "RepToTerritory",
                localField: "MarketID",
                foreignField: "MarketID",
                as: "join_output"
            }
        },
        { $match: { 'join_output.RepEmail': req.params.RepEmail } }
    ], function (err, _market) {
        if (err)
            res.send(err);
        else {
            res.json(_market);
        }
    });

};


var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});


exports.GetMarkets_By_EmailID_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql =
            `SELECT	m.MarketID, m.DisplayMarket, m.IsDefault, m.OrderNo
            FROM	RepToTerritory r
         JOIN MarketType m ON r.MarketID = m.MarketID
            WHERE	RepEmail = '${req.params.RepEmail}'
         GROUP BY 
         m.MarketID,m.DisplayMarket, m.IsDefault, m.OrderNo
            ORDER BY 
         m.OrderNo;
         `;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};
