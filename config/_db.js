const mariadb = require('mariadb');


const pool = mariadb.createPool({

  host: 'localhost',
  user: 'dbuser',
  password: 'F.w/3086kcR!YjhI',
  connectionLimit: 5,
  database: 'express_checkout'

});

module.exports = pool;