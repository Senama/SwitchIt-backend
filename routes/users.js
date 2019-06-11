const express=require('express');
const userRoutes = express.Router();
const UserService =require('../services/users');

userRoutes.post('/createUser', (req, res, next) => {
    const {uid, firstname, lastname, email,username} = req.body;
    console.log(uid)
    UserService.create(uid, firstname, lastname, email,username)
      .then(_ => {
        res.json({success: `Upoaded user successfully`});
      })
      .catch(err => {
          console.log(err)
        res.json(err)
      })
  });


  userRoutes.get('/read', (req, res) => {  
    console.log(req.params)
    const {email}=req.params;
    UserService.readUser(email)
      .then(data => {
        console.log("Rich", data)
        res.json(data);
      })
      .catch(err => {
        res.json(err)
      })
  });

  module.exports= userRoutes