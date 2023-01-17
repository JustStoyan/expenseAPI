import express from 'express';
const router = express.Router();
import {
    createExpense,
    updateExpense,
    deleteExpense
} from '../services/expenseService.js';
import connection from '../db.js';

router.get('/', async (req, res, next) => {
    connection.query('SELECT * FROM expenses', (err, result, fields) => {
        if (err) throw err;
        res.json(result)
    })

})

router.post('/add', (req, res, next) => {
    console.log(req.body)
    createExpense(req.body);
    res.json("Added")
})

router.put('/edit/:expenseId', (req, res, next) => {
    res.json([{ "Modifing": 120 }])
})

router.delete('/delete/:expenseId', (req, res, next) => {
    try {
        deleteExpense(req.body.id);
    } catch (err) {
        console.log(err);
    }




})

export default router;