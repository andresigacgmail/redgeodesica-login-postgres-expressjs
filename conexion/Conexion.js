
// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://postgres:1234@localhost:5432/redgeodesica");

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@PGSQLPRD01AZ/egdb_cartografia");


module.exports = db;