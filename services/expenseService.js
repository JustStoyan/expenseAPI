import { query } from '../db';


const createExpense = (expense) => {

    query(`
    INSERT INTO expenses (expense_category,expense_name,expense_amount)
     VALUES ("${expense.expenseCategory}", "${expense.expenseName}", "${expense.expenseAmount}")
     `, (err, res, fields) => {
        if (err) throw err
    })

}

const readExpense = () => {

    const list = query('SELECT * FROM expenses', function (err, result, fields) {
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
    query(`DELETE FROM expenses WHERE expense_id="${id}"`, (err, res, fields) => {
        if (err) throw err;

    })
}

export default {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}