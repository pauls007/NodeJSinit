const express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './public')

app.get('/', function(req, res){
    res.render('index2',{
        header: "หวัดดีสุดหล่อ",
        des: "ลำบากเกิดมาหน้าตาดีหนิ ชาดดด",
        topic: ['หล่อ','เท่','กินไม่ได้']
    })
});

var Server = app.listen(3000,function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});