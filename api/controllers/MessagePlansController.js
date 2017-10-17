'use strict';
var mongoose = require('mongoose'),
    mysql = require('mysql'),
    MessagePlans = mongoose.model('RepToPrescMsg');

exports.GetMessagePlans_By_PrescriberID_ProductName_MsgCategory = (req, res) => {
    MessagePlans.aggregate([
        {
            $lookup:
            {
                // from: "RepToPrescMsgPlans",
                // localField: "PrescriberID",
                // foreignField: "PrescriberID",
                // as: "join_output"
                from: "MessageType",
                localField: "MessageCategory",
                foreignField: "MessageKey",

                from: "RepToPrescMsgPlans",
                localField: "PrescriberID, MessageCode",
                foreignField: "PrescriberID, MessageCode",

                as: "join_output"
            }
        },
        { $match: { 'PrescriberID': parseInt(req.params.PrescriberID), 'ProductName': req.params.ProductName, 'MessageCategory': req.params.MsgCategory } }
    ], function (err, _plans) {
        if (err)
            res.send(err);
        else {
            res.json(_plans);
        }
    });
};
var con = mysql.createConnection({
    host: "192.168.100.13",
    user: "sagarsoft",
    password: "sagarsoft123",
    database: "purdue"
});

exports.GetMessagePlans_By_PrescriberID_ProductName_MsgCategory_mySql = (req, res) => {
    con.connect(function (err) {
        if (err) res.send(err);
        var sql = ` SELECT  PlanName,
        BenType,
        CASE WHEN Restriction = '' THEN Tier ELSE RTRIM(Tier) + ' ' + '-' + ' ' + Restriction END AS Tier,
        Restriction,
        MinPrintPlans,
        PlanClass,
        NoPrint,
        Planrank,
        CASE WHEN  WinLossFlag='Win' THEN 'Y' ELSE 'N' END AS WinFlag,
        CASE WHEN r.FormularyCategory = 'R' THEN 1 ELSE 0 END AS IsRestricted,
        a.MainMessage,
        a.MessageCode,
        a.TableHeader,
        a.StaticWinMessage,
        a.StateName,
        mt.Title AS MessageTypeTitle,
        r.Co_Pay
     
      FROM RepToPrescMsg a  
        LEFT JOIN RepToPrescMsgPlans r ON a.PrescriberID = r.PrescriberID
         AND a.MessageCode = r.MessageCode
        JOIN MessageType mt ON mt.MessageKey = a.MessageCategory
     
      WHERE a.PrescriberID = ${req.params.PrescriberID} 
        AND a.ProductName = '${req.params.ProductName}' 
        AND a.MessageCategory = '${req.params.MsgCategory}'
      GROUP BY 
        PlanName,
        BenType,
        Tier,
        Restriction,
        MinPrintPlans,
        PlanClass,
        NoPrint,
        Planrank,
        WinLossFlag,
        r.FormularyCategory,
        a.MainMessage,
        a.MessageCode,
        a.StaticWinMessage,
        a.StateName,
        a.TableHeader,
        mt.Title,
        r.Co_Pay
      ORDER BY 
        WinLossFlag DESC, 
        PlanRank ASC
     `;

        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    });
};

