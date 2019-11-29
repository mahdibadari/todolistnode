const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  token: {
    type: String
  }
}, {
  collection: 'users'
});

User.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
}

module.exports = mongoose.model('User', User)