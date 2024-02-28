var express = require('express');
const User = require('../models/UserModel');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();




var store=[]

//localhost:3000/login?userName=test&password=123
router.get('/login', function (req, res) {
  var found = store.find(user => user.userName === req.query.userName && user.password === req.query.password);
  if (!found) {
    found = new User(uuidv4(),req.query.userName, req.query.password);
    store.push(found)
  }
  res.send(found.toJson());
});

module.exports = router;
