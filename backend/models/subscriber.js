var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var subscriberSchema = new Schema({
  email: String,
  ip: String,
  subscribed_at: Date
});

var Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;