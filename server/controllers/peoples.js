var mongoose = require('mongoose');
var people = mongoose.model('Born');
module.exports = {
  show: function(req, res) {
    people.find({}, function(err, ppl) {
      res.json(ppl);
    })
  },
  create: function(req, res) {
    var newperson = new people({name: req.body.name});
    newperson.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        console.log("person created!")
        res.redirect('/');
      }
    })
  },
  destroy: function(req, res) {
    people.remove({name: req.body.name}, function(err, ppl){
        res.redirect('/');
    })
  }
}