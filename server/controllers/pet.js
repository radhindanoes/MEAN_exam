const mongoose = require('mongoose');
require('../models/pet_model');
var Pet = mongoose.model('Pet');

module.exports = {

    //GEETING ALL THE PETS TO SHOW UP ON THE PAGE//

    all_pets: function (req, res) {
        Pet.find({}, function (err, pets) {
            console.log('foo');
            if (err) {
                console.log("Error:", err);
            } else {
                return res.json({ message: "Here are all the Pets!", pets: pets })
            }
        }).sort({ type: 1 })
    },

    //GETTING JUST ONE PETS TO SHOW UP ON THE PAGE//

    find_pet: function (req, res) {
        console.log('/./././/././././././././././././././')
        console.log("found our pet")
        //when you do req.params.id, there is no underscore in the id!
        Pet.findOne({ _id: req.params.id }, function (err, pet) {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                console.log(req.params.id);
                res.json({ message: "Success", pet: pet })
            }
        })
    },

    //ADDING A NEW PET TO THE DATABASE//

    add_pet: function (req, res) {
        //MUST be the same as the model
        name = req.body.name
        type = req.body.type
        description = req.body.description
        skillone = req.body.skillone
        skilltwo = req.body.skilltwo
        skillthree = req.body.skillthree

        var new_pet = new Pet({
            name: name,
            type: type,
            description: description,
            skillone: skillone,
            skilltwo: skilltwo,
            skillthree: skillthree,
        });

        new_pet.save(function (err, pet) {
            if (err) {
                res.json({ message: "Could not save new Pet", errors: err })
            } else {
                console.log('//////////////////////')
                console.log('added pet')
                res.json({ message: 'success!!!!!', data: pet })
                // res.redirect('/')
            }
        });
    },

    //UPDATING AN EXISTING PET//

    update_pet: function (req, res) {
        //when you have a colon (:______), everything must correspond after the req.params.______
        Pet.findOne({_id: req.params.id}, function (err, pet) {
            pet.name = req.body.name,
            pet.type = req.body.type,
            pet.description = req.body.description,
            pet.skillone = req.body.skillone,
            pet.skilltwo = req.body.skilltwo,
            pet.skillthree = req.body.skillthree

            pet.save(function (err, pet) {
                if (err) {
                    res.json({ message: "Error", error: err });
                } else {
                    res.json({ message: "Success", data: pet });
                }
            });
        });
    },

    //DELETING AN PET//

    delete_pet: function (req, res) {
        //when you have a colon (:______), everything must correspond after the req.params.______
        Pet.findOneAndDelete({ _id: req.params.id }, function (err, pet) {
            if (err) {
                res.json({ message: "error", data: pet })
            } else {
                res.json({ message: "removed Pet", data: pet });
            }
        })
    },

    //LIKE//

    addLike: function (req, res) {
        Pet.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } }, { new: true }, function (err, response) {
            if (err) {
                res.json({ message: "Error", error: { mesage: "Name, Type, and Description must be 3 characters long" } });
            } else {
                res.json({ message: "Success", data: response });
            }
        })
    }
};

