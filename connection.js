var mysql = require("mysql");

// Create Database Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mahasiswa",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connection;
