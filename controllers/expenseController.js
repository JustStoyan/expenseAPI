const router = require('express').Router();
import expenseService from '../services/expenseService';
import { query } from '../db';

router.get('/', async (req, res, next) => {
    query('SELECT * FROM expenses', (err, result, fields) => {
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

export default router;