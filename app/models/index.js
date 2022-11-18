const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.buildings = require("./building.model.js");
db.markers = require("./marker.model.js");
db.users = require("./user.model.js");

module.exports = db;