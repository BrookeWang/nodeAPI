var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');

var userSch = require('../models/userSchema.js');

//put one user into userDB for test

/**
userSch.create({name:'Master Java', password:'You guess',user_id: 10,completed:true},function(err,sampleuser){
	if(err) console.log(err);
	else console.log(sampleuser);
});*/
/**
userSch.remove({completed:true},function(err,sample){
	if(err) console.log(err);
	else console.log(sample);
});*/

/* GET /todos listing. */
router.get('/', function(req, res, next) {
	userSch.find(function(err,userdata){
		if(err) return next(err);
		res.json(userdata);
	});
  //res.send('respond with a resource');
});
/* add the ability to create using mongoose create */
router.post('/', function(req, res, next){
	userSch.create(req.body, function(err,post){
		if(err) return next(err);
		res.json(post);
	});
})

//show:Get/users/:id
router.get('/:id', function(req, res, next){
	userSch.findById(req.params.id, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//Update:Put/users/:id
router.put('/:id', function(req,res,next){
	userSch.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//Destroy: Delete/users/:id
router.delete('/:id', function(req, res, next){
	userSch.findByIdAndRemove(req.params.id, req.body, function(err,post){
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;
