const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');
const Name = require('../models/name');
const Signup = require('../models/signup');

//-------------- Contacts--------------------------
//retrieving contacts
router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});

//add contact
router.post('/contact', (req, res, next) => {
    console.log(req.body.school_name);
    let newContact = new Contact({
        school_name: req.body.school_name,
        date_year: req.body.date_year,
        date_month: req.body.date_month,
        date_week: req.body.date_week,
        euro_ele: req.body.euro_ele,
        euro_heat: req.body.euro_heat,
        euro_water: req.body.euro_water,
        kwh_heat: req.body.kwh_heat,
        kwh_water: req.body.kwh_water,
        liter_water: req.body.liter_water
    });
    

    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Sorry. input failed' });
        }
        else {
            res.json({ msg: 'Success. Congratulations.' });
        }
    });
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);;
        }
    });
});

//---------------------- add school Name-------------------

//retrieving schoolname
router.get('/names', (req, res, next) => {
    Name.find(function (err, names) {
        res.json(names);
    })
});

// add schoolname
router.post('/name', (req, res, next) => {

    let newName = new Name({
        name: req.body.name
    });

    newName.save((err, name) => {
        if (err) {
            res.json({ msg: 'Failed to add school.' });
        }
        else {
            res.json({ msg: 'School successfully added.' });
        }
    });
});

//---------------------- sign up------------------------

//retrieving data
router.get('/signups', (req, res, next) => {
    Signup.find(function (err, Signups) {
        res.json(Signups);
    })
});

//Signup
router.post('/signup', (req, res, next) => {
    console.log(req.body)
    let newSignup = new Signup({       
        com_name:req.body.com_name,
        user_name:req.body.user_name,
        email_address:req.body.email_address,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        user_pwd:req.body.user_pwd,
        user_p_pwd:req.body.user_p_pwd,
        card_num:req.body.card_num,
        about_me:req.body.about_me
    })

    newSignup.save((err, Signup) => {

        if (err) {
            res.json({ msg: 'Failed to signup' });
        } else {
            res.json({ msg: 'signed successfully up' });
        }
    });
});

router.delete('/signups/:id', (req, res, next) => {
    Signups.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);;
        }
    });
});

module.exports = router;