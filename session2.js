var express = require('express');
var app = express();

//load session
const session = require('express-session');
app.use(session({
    secret: 'Ayess', cookies: {maxAge: 60000000},
    resave: true, saveUninitialized: false
}));



app.get('/login',function(req,res){

    if(req.session.isLoggedIn != null && req.session.isLoggedIn == true){
        res.redirect('/profile');
    }
    
    if(req.query.username =="admin" && req.query.password =="password"){
        req.session.username = req.query.username;
        req.session.isLoggedIn = true;
        res.redirect('/profile');
    }else{
        res.send("Invalid username && password");
    }
}); 

app.get('/profile',function(req,res){


    if( req.session.isLoggedIn != null &&  req.session.isLoggedIn == true){
        res.end("Profile of: "+ req.session.username);
    }else{
        res.redirect('/login');
    }
});

app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
});

app.get('/', function(req,res){
    
    if( req.session.isLoggedIn != null && req.session.isLoggedIn == true){
        res.redirect('/profile');
        return;
    }else{
        res.redirect('/login');
    }
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host,port);
});