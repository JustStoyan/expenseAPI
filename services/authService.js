const db = require('../db');

const getRegistered = (email, name, password) => {


    db.query(`INSERT INTO users  (email, name, password) VALUES ("${email}", "${name}", "${password}")`, (err, res, fields) => {
        if (err) {
            throw err
        } else {
            res.message = "Success";
            console.log(res.message);
        }
    })


};

const getLogged = () => {

};




module.exports = {
    getRegistered,
    getLogged
}



