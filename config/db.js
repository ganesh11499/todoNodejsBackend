const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb://localhost:27017/todoapp").on('open', () => {
    console.log("database connected");
}).on('error', () => {
    console.log('database connection error');
});

module.exports = connection;