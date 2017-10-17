'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    MessageType = mongoose.model('MessageType');

exports.GetMessageTypes_By_PrescriberID_ProductName = (req, res) => {
    MessageType.aggregate([
        {
            $lookup:
            {
                from: "RepToPrescMsg",
                localField: "MessageKey",
                foreignField: "MessageCategory",
                as: "join_output"
            }
        },
        { $match: { 'join_output.PrescriberID': parseInt(req.params.PrescriberID), 'join_output.ProductName': req.params.ProductName } }
    ],
        function (err, _MessageType) {
            if (err)
                res.send(err);
            else {
                res.json(_MessageType);
            }
        });
};
var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});

exports.GetMessageTypes_By_PrescriberID_ProductName_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql = `
        
SELECT	
a.MessageCategory
,Title
,Description
,MessageKey
,IsEnabled
,OrderNo
 
,MinPlans
,MaxPlans
,IsLocationBound
FROM	RepToPrescMsg a 
JOIN MessageType mt ON a.MessageCategory = mt.MessageKey
WHERE	a.PrescriberID = 1236252 
AND a.Productname = '${req.params.PrescriberID}'
AND mt.IsLocationBound = '${req.params.ProductName}'
GROUP BY 
a.MessageCategory
,Title
,Description
,MessageKey
,IsEnabled
,OrderNo

,MinPlans
,MaxPlans
,IsLocationBound

        `;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};