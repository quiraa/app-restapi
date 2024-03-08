var mysql = require("mysql");

//  Make Database Connection

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mahasiswa",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("MySQL Connected");
});

module.exports = conn;
