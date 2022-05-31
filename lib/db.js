let mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port || 3000
});

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

module.exports = con;

// server = sql6.freemysqlhosting.net; uid = sql6490641; pwd = l2AZNeVeZe; database = sql6490641;