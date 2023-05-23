const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//user schema
const DogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    caredays: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }

});

const Dog = module.exports = mongoose.model('Dog', DogSchema);

module.exports.addDog = function(newDog, callback) {
    newDog.save(callback);
};