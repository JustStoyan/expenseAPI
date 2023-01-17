const db = require('../db');


const createExpense = (expense) => {

    db.query(`
    INSERT INTO expenses (expense_category,expense_name,expense_amount)
     VALUES ("${expense.expenseCategory}", "${expense.expenseName}", "${expense.expenseAmount}")
     `, (err, res, fields) => {
        if (err) throw err
    })

}

const readExpense = () => {

    const list = db.query('SELECT * FROM expenses', function (err, result, fields) {
        if (err) {
            throw err;
        } else {

            return result;
        }
    });
    return list;
}

const updateExpense = (id) => {

}

const deleteExpense = (id) => {
    db.query(`DELETE FROM expenses WHERE expense_id="${id}"`, (err, res, fields) => {
        if (err) throw err;

    })
}

module.exports = {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}