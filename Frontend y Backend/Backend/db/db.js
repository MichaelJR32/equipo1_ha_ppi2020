const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bnbibuckuaz4sr9y0biy-mysql.services.clever-cloud.com',
  user: 'uzev7m7cycz5nhfw',
  password: 'br8COVBvSuD7KrQGWxox',
  database: 'bnbibuckuaz4sr9y0biy',
  port:"3306",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});



module.exports = mysqlConnection;