const express = require('express');
const User = require('../models/user');

let router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.send('Error');
        }
    })
    .post(async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            category: req.body.category,
            tech: req.body.tech,
            filename: req.body.filename,
            photo64: req.body.photo64
        });
        try {
            const oneUser = await user.save();
            res.json(oneUser);
        } catch (err) { res.send('Error!! ', err); }
    });

router.delete('/:id', async (req, res) => {
    console.log('delete kar', req.params.id)
    try {
        const user = await User.findById(req.params.id)
        const deleted = await user.remove()
        res.json(deleted)
    } catch (err) {
        console.log('error hai! del mei', err)
        res.send('Error bro')
    }
});

module.exports = router;