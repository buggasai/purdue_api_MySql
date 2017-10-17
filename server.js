var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
mysql = require('mysql');

RepToTerritory = require('./api/models/TerritoryModel'),  //created model loading here
MarketType = require('./api/models/MarketModel'),
Prescriber = require('./api/models/PrescriberModel'),
Products = require('./api/models/ProductModel'),
messageType = require('./api/models/MessageTypeModel'),
messagePlans = require('./api/models/PrescriberMsgModel'),

bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://192.168.100.23/Purdue');
//mongoose.connect('mongodb://heroku_2ltn9472:j048m56fg083g3liqbvne6ur2o@ds155634.mlab.com:55634/heroku_2ltn9472');
mongoose.connect('mongodb://heroku_0bpgvlgv:sup2e44f3dap42h17rp4kus7f@ds019033.mlab.com:19033/heroku_0bpgvlgv');

var con = mysql.createConnection({
host: "192.168.100.13",
user: "sagarsoft",
password: "sagarsoft123",
database: "purdue"
});

con.connect(function (err) {
if (err) throw err;
console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
});

// Set up a URL route
app.get("/", function (req, res) {
//res.send("Heroku Demo!");
con.query("SELECT * FROM markettype", function (err, result, fields) {
  if (err) throw err;
  res.send(result);
});
});


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Purdue list RESTful API server started on: ' + port);