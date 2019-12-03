'use strict'

const express = require('express');
const taskRoute = express.Router();

// Student model
let Task = require('../models/todolistModel');

// Add Student
taskRoute.route('/tasks').post((req, res, next) => {
    Task.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
taskRoute.route('/tasks').get((req, res) => {
    Task.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
taskRoute.route('/tasks/:taskId').get((req, res) => {
    Task.findById(req.params.taskId, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
taskRoute.route('/tasks/:taskId').put((req, res, next) => {
    Task.findByIdAndUpdate(req.params.taskId, {
    $set: req.body
  },{new: true}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Delete student
taskRoute.route('/tasks/:taskId').delete((req, res, next) => {
    Task.findByIdAndRemove(req.params.taskId, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = taskRoute;