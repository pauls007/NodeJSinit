var express = require('express');
var path = require('path');
var app = express();

//การดึงภาพจากโฟลเดอร์ public แบบเดิม
app.use(express.static(path.join(__dirname,"/public")));

//การดึงภาพจากโฟลเดอร์ public แบบใหม่
app.use(express.static('public'));

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});