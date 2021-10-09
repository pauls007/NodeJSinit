var express = require("express")();
var app = express;

app.get('/post/:username/:password', function(req, res){
    res.json({version: " 1 ",username: req.params.username, password: req.params.password});
});

//เป็นการเขียนโดยมีบอก Sub อย่างชัดเจนว่าอะไรคืออะไร
app.get('/post/username/:username/password/:password', function(req, res){
    res.json({version: "2 ",username: req.params.username, password: req.params.password});
});

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);

});