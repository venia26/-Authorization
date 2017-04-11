var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'venia',
    password : 'venia_26',
    database : 'node'
});

connection.connect();

connection.query('UPDATE users SET mail=\'tron001@i.ua\'');

connection.end();