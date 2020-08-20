const knex = require("knex");

const knexConfig = require("../knexfile");

const enviorment = process.env.SWIFT_ENV || "development";

module.exports = knex(knexConfig[enviorment]);
