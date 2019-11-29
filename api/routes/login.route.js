const express = require('express');
const loginRoute = express.Router();
const jwt = require('jsonwebtoken');

let User = require('../models/user');
let config = require('../../config/config');

loginRoute.route('/register').post((req, res, next) => {
    User.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });
  
  loginRoute.route('/login').post((req, res) => {
    User.findOne({'username': req.body.username, 'password': req.body.password}, (error, data) => {
      if (error) {
        return next(error)
      } else {
        var token = jwt.sign({id: data._id, username: data.username}, config.secret, {expiresIn: '2h'});
        data.token = token;
        res.send({data});
      }
    })
  });

  loginRoute.route('/getall').get((req, res) => {
    User.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  

  module.exports = loginRoute;