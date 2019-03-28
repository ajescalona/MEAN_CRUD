const mongoose = require('mongoose');

//URL DATABASE CONNECT 
const URI = 'mongodb://localhost/mean-crud'


mongoose.connect(URI)
    .then(db => console.log('is connect!!!!'))
    .catch(err => console.error(err));

module.exports = mongoose;