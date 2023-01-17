import connection from '../db.js';

const getRegistered = (email, name, password) => {


    connection.query(`INSERT INTO users  (email, name, password) VALUES ("${email}", "${name}", "${password}")`, (err, res, fields) => {
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




export default {
    getRegistered,
    getLogged
}



