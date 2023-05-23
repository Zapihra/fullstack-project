const express = require('express');
const router = express.Router();
const Dog = require('../models/dog')
const config = require('../config/database');
const passport = require('passport');

//Register
router.post('/register', (req, res, next) => {
    let newDog = Dog({
        name: req.body.name,
        age: req.body.age,
        owner: req.body.owner,
        caredays: req.body.caredays,
        number: req.body.number
    });

    Dog.addDog(newDog, (err, dog) => {
        if(err){
            res.json({success: false, msg: 'Failed to register dog'});
        }
        else {
            res.json({success: true, msg: 'Dog registered'});
        }
    })

});

router.post('/searchdog', (req, res, next) => {
    let newDog = Dog({
        name: req.body.name,
        owner: req.body.owner,
    });
    Dog.searchDog(newDog, (err, dog)=> {
        if (dog == undefined) {
            res.json({name: undefined});
        }
        else{res.send(dog);}
    })

});
module.exports = router;