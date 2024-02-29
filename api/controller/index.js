var express = require('express');
const User = require('../data/models/UserModel');
const { v4: uuidv4 } = require('uuid');
const Repository = require('../data/repository/arrayDb');
var router = express.Router();





const personRepo = new Repository();

//localhost:3000/login?userName=test&password=123
router.get('/login', function (req, res) {
  personRepo.getByUserNameAndPassword(req.query.userName, req.query.password).then(user => {
    if (!user) {
      user = new User(uuidv4(),req.query.userName, req.query.password);
      personRepo.add(user);
    }
    res.send(user);
  })
  
 
});

module.exports = router;
