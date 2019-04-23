const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        unique: [true, "Must Not Be A Duplicate Name"]
    },
    type: {
        type: String,
        required: [true, "type is required"],
        minlength: [3, "type must be at least 3 characters"],
        
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters"]
    },
    skillone: {
        type: String,
        required: [true, "skill one is required"],
        minlength: [3, "skill one must be at least 3 characters"]
    },
    skilltwo: {
        type: String,
        required: [true, "skill two is required"],
        minlength: [3, "skill two must be at least 3 characters"]
    },
    skillthree: {
        type: String,
        required: [true, "skill three is required"],
        minlength: [3, "skill three must be at least 3 characters"]
    },
    likes:{
        type: Number,
        default:0
    },
});

mongoose.model('Pet', petSchema);
var Pet = mongoose.model('Pet');
module.exports = Pet;
