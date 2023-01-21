import connection from '../db.js';


const createExpense = (expense) => {
    console.log(expense)
    connection.query(`
    INSERT INTO expenses (expense_category,expense_name,expense_amount)
     VALUES ("${expense.category}", "${expense.name}", "${expense.amount}")
     `, (err, res, fields) => {
        if (err) throw err
    })
}

const readExpense = () => {
    const list = query('SELECT * FROM expenses', function (err, result) {
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

export {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}