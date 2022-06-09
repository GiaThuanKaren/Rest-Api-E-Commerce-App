const routes = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const Dotenv = require("dotenv");
//REGISTER

routes.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then((respone) => {
      console.log(respone);
      res.json(respone);
    })
    .catch((e) => {
      console.log("Loi " + e);
      res.sendStatus(404).send(e);
    });
});


routes.post("/login",(req,res)=>{
    const UserGet= User.findOne({ username:req.body.username})
    .then(item=>{
        res.json(item)
    })
    .catch(e=>{
        res.send(e)
    })
})
module.exports = routes;
