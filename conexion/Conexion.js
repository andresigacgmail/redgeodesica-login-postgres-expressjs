
// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://postgres:1234@localhost:5432/redgeodesica");

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@PGSQLPRD01AZ/egdb_cartografia");

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@10.23.11.24:5432/egdb_cartografia");

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@PGSQLPRD01AZ/egdb_cartografia");

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://fl0user:1AMeWxsLzCm2@ep-weathered-rain-22745194.us-east-2.aws.neon.fl0.io/redgeodesica");

module.exports = db;