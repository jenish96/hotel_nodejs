const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('admins', AdminSchema);