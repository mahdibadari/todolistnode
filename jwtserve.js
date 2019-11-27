const bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    expressJwt = require('express-jwt'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    dataBaseConfig = require('./database/db');

app.use(bodyParser.json());

app.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username);
  if(!user || body.password != 'todo') return res.sendStatus(401);
  
  var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});