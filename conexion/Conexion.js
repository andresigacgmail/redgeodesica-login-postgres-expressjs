
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:1234@localhost:5432/redgeodesica");




module.exports = db;