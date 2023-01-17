import express from 'express';
const router = express.Router();

import { genSalt, hash as _hash } from 'bcrypt';

import authService from '../services/authService.js';

router.post('/register', (req, res) => {
    genSalt(10, (err, salt) => {
        if (err) console.log(err)

        _hash(req.body.password, salt, (err, hash) => {
            if (hash) {
                authService.getRegistered(req.body.email, req.body.name, hash);
            }
        });

    })

})

router.post('/login', (req, res) => {
    res.json({ response: "login" })
})

export default router;