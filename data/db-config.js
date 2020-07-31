const knex = require('knex');
const config = require('../knexfile');

const database = process.env.ENV || "development";

const db = knex(config[database])

module.exports = db