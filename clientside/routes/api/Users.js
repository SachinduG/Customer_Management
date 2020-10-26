const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ Email_Address: req.body.Email_Address }).then(user => {
      if (user) {
        return res.status(400).json({ Email_Address: "Email Address already exists" });
      } else {
        const newUser = new User({
          First_Name: req.body.First_Name,
          Last_Name: req.body.Last_Name,
          Email_Address: req.body.Email_Address,
          Mobile_Number: req.body.Mobile_Number,
          Home_Address: req.body.Home_Address,
          Password: req.body.Password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.Password, salt, (err, hash) => {
            if (err) throw err;
            newUser.Password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const Email_Address = req.body.Email_Address;
  const Password = req.body.Password;
  // Find user by email
    User.findOne({ Email_Address }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ Email_Addressnotfound: "Email Address not found" });
      }
  // Check password
      bcrypt.compare(Password, user.Password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            First_Name: user.First_Name,
            Last_Name: user.Last_Name,
            Email_Address: user.Email_Address,
            Mobile_Number: user.Mobile_Number,
            Home_Address: user.Home_Address
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 3600 // 1 hour in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ Passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;