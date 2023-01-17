const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const expenseController = require('./controllers/expenseController');





router.use('/expenses', expenseController);
router.use(authController);
router.use('*', (req, res) => {
    res.status(404).send('Error, forbidden page')
});



router.post('/login', (req, res) => {
    res.json({ page: "login" })
})

router.get('/expenses', (req, res) => {
    res.json([{ name: "Bank", price: "120" }])
})

router.post('/expenses/add', (req, res) => {
    res.json({ name: "Bank", price: "120" })
})

router.put('/expenses/:expenseId', (req, res) => {
    res.json({ name: "Bank", price: "120" })
})

router.all('/', (req, res) => {
    res.status(403).json({ message: "access forbidden" })
})

module.exports = router;

// wcsb1DLpJCktEBdN