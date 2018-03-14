const mongoose = require('../configs/database');
const Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    email: String,
    dob: { type: Date, default: Date.now },
    address: String,

    createdTime: { type: Date, default: Date.now },
    updatedTime: { type: Date, default: Date.now },
});


module.exports = mongoose.model('user', userSchema);
