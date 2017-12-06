var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Name',{useMongoClient : true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('connected to mongo');
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    Email: String
});

module.exports = mongoose.model('user', userSchema);