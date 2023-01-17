import { createConnection } from 'mysql';
const connection = createConnection({
    host: 'localhost',
    user: 'expenses_admin',
    password: 'BFxjp)pi57C2]qr1',
    database: 'expenses_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

export default connection;







