//const { compileClientWithDependenciesTracked } = require("pug");

var express = require('express')();
var bodyParser = require('body-parser');
var app = express;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.end("Welcome");
});

// Call function lumbada
app.get('/profile', (req, res)=>{
    res.end("profile");
});

app.get('/login', (req, res)=>{
    res.end("username: "+ req.query.username+ ", password: "+req.query.password);
});

app.post('/post', (req, res)=>{
    res.end("username: "+ req.body.username+ ", password: "+req.body.password);
});

/*
//if incoming request is json


app.get('/', function(req, res){
    res.json({res: 'หวัดดีชาวโลก'});
});

app.post('/add', function(req, res){
    var _title = req.body.title;
    var _subtitle = req.body.subtitle;
    res.json({status: 'added', title: _title, subtitle: _subtitle});
});

app.put('/update', function(req,res){
    var _title = req.body.title;
    var _subtitle = req.body.subtitle;
    res.json({status: 'updated', title: _title, subtitle: _subtitle});
});

app.delete('/del', function(req, res){
    var _title = req.body.title;
    var _subtitle = req.body.subtitle;
    res.json({status: 'deleted', title: _title, subtitle: _subtitle});
});
*/
var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});