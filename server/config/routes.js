// const mongoose = require('mongoose');
let pet = require('../controllers/pet');

module.exports = function (app) {
    app.get('/pets', function (req, res) {
        pet.all_pets(req, res);
    });

//THE BUTTON TO POST//
    app.post('/newpet', function (req, res) {
        console.log('this is a create method', req.body);
        pet.add_pet(req, res);
    });

    app.route('/pet/:id') 
        .get(function (req, res) {
            pet.find_pet(req, res);
        })
        .put(function (req, res) {
            pet.update_pet(req, res);
        })
        .delete(function (req, res) {
            pet.delete_pet(req, res);
        })
        

        app.put('/like/:id', function (req, res) {
            console.log('this is a create method', req.body);
            pet.addLike(req, res);
        });
}
