const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;

let User = require('./user.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Gamitha:IT19140476@fashow.ygx0b.mongodb.net/Fashow?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully!");
})

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

userRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, user){
        res.json(user);
    });
});

userRoutes.route('/add').post(function(req, res){
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('data is not found');
        else
            user.First_Name = req.body.First_Name;
            user.Last_Name = req.body.Last_Name;
            user.Email_Address = req.body.Email_Address;
            user.Mobile_Number = req.body.Mobile_Number;
            user.Home_Address = req.body.Home_Address;
            user.Password = req.body.Password;

            user.save().then(user => {
                res.json('User updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

userRoutes.route('/:id').delete(function(req, res) {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.use('/users', userRoutes);

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);

});