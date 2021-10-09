const express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.post('/post',function(req,res){ //เรียกแบบ Jason & urlencode
    const   _username = req.body._username;
    const   _password = req.body._password;

    res.json({result:'success', username: _username, password: _password});
});

var Server = app.listen(3000,function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});