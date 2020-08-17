const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sportsBlog",
});
connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("We're connected to sportsBlog DB on MySQL.");
});
function executeAsync(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = { executeAsync };
