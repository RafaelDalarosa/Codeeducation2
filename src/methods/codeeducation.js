const conn = require('../config/db');

const getAll = _ => {
    return conn.promise().query('SELECT * FROM people');
}

const insertRow = data => {
    return conn.promise().query(`INSERT INTO people SET ?`, data);
}

module.exports = {getAll, insertRow};
