var express = require("express")();
var app = express;


app.get('/', function(req, res){
    res.end("Hi");
});

app.get('/login', function(req,res){
    res.end("Pls Login with UserName & Passwordddd555555");
});

app.post('/profile', function(req, res){
    res.json({resulst: 'My Profile by post'});
});

app.delete('/delprofile', function(req, res){
    res.json({resulst: 'Del My Profile....'});
});

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);

});