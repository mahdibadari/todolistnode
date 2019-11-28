var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.registerUser = function(req, res) {
    var new_user = new Task(User.body);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

exports.findUser = function (req, res) {
    User.findOne({'username': req.body.username, 'password': req.body.password}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};