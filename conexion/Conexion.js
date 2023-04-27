
// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://postgres:1234@localhost:5432/redgeodesica");

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@PGSQLPRD01AZ/egdb_cartografia");

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@10.23.11.24:5432/egdb_cartografia");

module.exports = db;