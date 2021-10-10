var express = require('express');
var router = express.Router();

router.route('/routes').get(function(req,res){
    res.json({result: "Get was called"});
}).post(function(req,res){
    res.json({result:"Post was Called"});
}).put(function(req,res){
    res.json({result: "Put was Called"});
}).delete(function(req,res){
    res.json({result: "Delete was Called"});
});

router.get('/test', function(req,res){
    res.json({result: 'test page'});
})

router.route('/comment').get(function(req,res){
    res.json({result: "Comments get was called"});
}).post(function(req,res){
    res.json({result: "Comments post waqs called"});
}).put(function(req,res){
    res.json({result: "Comments put was called"});
}).delete(function(req,res){
    res.json({result: "Comments delete was called"});
});

router.route('/stock').get(function(req,res){
    res.json({result: "Stock get was called"});
}).post(function(req,res){
    res.json({result: "Stock post waqs called"});
}).put(function(req,res){
    res.json({result: "Stock put was called"});
}).delete(function(req,res){
    res.json({result: "Stock delete was called"});
});

module.exports = router;