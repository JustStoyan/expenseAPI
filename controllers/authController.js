const router = require('express').Router();
const bcrypt = require('bcrypt');

const authService = require('../services/authService');

router.post('/register', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log(err)

        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (hash) {
                authService.getRegistered(req.body.email, req.body.name, hash);
            }
        });

    })

})

router.post('/login', (req, res) => {
    res.json({ response: "login" })
})

module.exports = router;