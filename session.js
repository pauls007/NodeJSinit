const express = require('express');
var app = express();
//http://github.com/expressjs/session
var session = require('express-session');
app.use(session({
    secret: 'Codehand', cookie:{maxAge: 60000},
    resave: true, saveUninitialized: false
}));

app.post('/count', function(req,res){
    
    if (req.session.count == null){
        req.session.count =0;
    }

    req.session.count = req.session.count +1;
    res.json({result: 'success', count: req.session.count});

});

app.get('/reset', function(req,res){
    req.session.destroy(function(err){
        if (err) throw err;

        res.setHeader("content-type","text/html");
        res.write("<b><font color='#FF0000'>Reset</font></b>")
        res.end();
    });
});

var Server = app.listen(3000,function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});