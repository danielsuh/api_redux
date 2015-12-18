// require mongoose
var mongoose = require('mongoose');
// create the schema
var BornSchema = new mongoose.Schema({
  name: String
})
// register the schema as a model
var Born = mongoose.model('Born', BornSchema);