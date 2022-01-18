const conn = require('../config/db');

const getAll = _ => {
    return conn.promise().query('SELECT * FROM people');
}

module.exports = {getAll};
