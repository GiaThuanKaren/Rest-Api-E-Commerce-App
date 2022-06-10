const routes = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const Dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const VerifyToken = require("./verifytoken");
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
      return ;
    })
    .catch((e) => {
      console.log("Loi " + e);
      res.sendStatus(404).send(e);
    });
});

routes.post("/login", (req, res) => {
  const UserGet = User.findOne({ username: req.body.username })
    .then((item) => {
      console.log(item, item == null);
      
      if (item == null) {
        console.log("No account check");
        res.status(401).json("No Account \\n Please Register");
        return;
      }
      const { password, ...others } = item._doc;
      // console.log(req.body.password, password);
      if (req.body.password != password) {
        res.status(401).json("Wrong PassWord");
        return;
      }

      const accesstoken = jwt.sign(
        {
          id: item._id,
          isAdmin: item.isAdmin,
        },
        "thuan",
        {
          expiresIn: "3d",
        }
      );
      console.log(accesstoken)
      res.status(200).json({...others,accesstoken});
    })
    .catch((e) => {
      console.log(e)
      res.status(404).json(e);
    });
});











module.exports = routes;
