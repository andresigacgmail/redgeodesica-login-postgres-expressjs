
// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://postgres:1234@localhost:5432/redgeodesica");
require('dotenv').config();

var pgp = require("pg-promise")(/*options*/);
var db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`);

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@10.23.11.24:5432/egdb_cartografia");

// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://gis_owner_centroctrl_prod:9CU8uZSuzBDpTssR@PGSQLPRD01AZ/egdb_cartografia");

// var pgp = require("pg-promise")();
// const db = pgp({
//     user: 'fl0user',
//     password: '1AMeWxsLzCm2',
//     host: 'ep-weathered-rain-22745194.us-east-2.aws.neon.fl0.io',
//     port: '5432',
//     database: 'redgeodesica',
//     ssl: {
//       // Habilita la conexión SSL/TLS segura
//       rejectUnauthorized: false, // Esto permite conexiones SSL no autenticadas, ten cuidado en producción
//     },
//   });

module.exports = db;