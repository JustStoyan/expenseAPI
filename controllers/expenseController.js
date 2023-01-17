const router = require('express').Router();
const expenseService = require('../services/expenseService');
const db = require('../db');

router.get('/', async (req, res, next) => {
    db.query('SELECT * FROM expenses', (err, result, fields) => {
        if (err) throw err;
        res.json(result)
    })

})

router.post('/add', (req, res, next) => {
    expenseService.createExpense(req.body);
    res.json("Added")
})

router.put('/edit/:expenseId', (req, res, next) => {
    res.json([{ "Modifing": 120 }])
})

router.delete('/delete/:expenseId', (req, res, next) => {
    try {
        expenseService.deleteExpense(req.body.id);
    } catch (err) {
        console.log(err);
    }




})

module.exports = router;