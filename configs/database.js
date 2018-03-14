const mongoose = require('mongoose');
const Constants = require('./constants');


mongoose.connect(Constants.DB_URL);


module.exports = mongoose;
