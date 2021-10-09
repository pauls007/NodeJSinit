var express = require('express');
var path = require('path');
var app = express();

app.get('/profile', function(req, res){
    res.end('This is profile Ja');    
});

app.use(function(req, res, error){
    //res.write("Page not found");
    res.sendFile(path.join(__dirname, "/public/page_not_found.html"));
    //res.redirect('/public/page_not_found.html');
   //app.use(express.static('/public/pagenotfound.html'));
});

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});