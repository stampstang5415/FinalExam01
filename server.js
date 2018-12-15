var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page

var output = {
    status: 'success',
    message: 'REST API is working'
}

app.get('/', function (req, res) {
    res.send('Express is running');
});

app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/supplier/', db.getAllSuppliers);
app.get('/api/supplier/:id', db.getSuppliersByID);




var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});