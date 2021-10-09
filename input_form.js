const express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded({extended: false}));

//http://github.com/expressjs/session
var session = require('express-session');
app.use(session({
    secret: 'Codehand', cookie:{maxAge: 60000},
    resave: true, saveUninitialized: false
}));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname,"/public/login.html"));
});

app.post('/authen', function(req, res){
    res.json({username:  req.body.username, Password: req.body.password});
});


var Server = app.listen(3000,function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});