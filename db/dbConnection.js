const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "car-agency",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err; 
  console.log("DB connection");
});

module.exports = connection;
