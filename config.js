const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "equipment",
});

con.connect((error) => {
  if (error) {
    console.log("Error :" + error);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = con;
