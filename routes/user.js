const User = require("../Models/User");
const {
  VerifyToken,
  VerifyandAuthorization,
  VerifyandAdmin,
} = require("./verifytoken");

const routes = require("express").Router();

//PUT

routes.put("/:id", VerifyToken, (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((item) => {
      console.log(item, "respone");
      res.json(item);
    })
    .catch((e) => {
      console.log(e);
      res.status(403).json(e);
    });
});

//DELETE

routes.delete("/:id", VerifyandAdmin, (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json("User has been deleted");
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

//GET

routes.get("/find/:id", VerifyandAdmin, (req, res) => {
  User.findById(req.params.id)
    .then((item) => {
      const { password, ...other } = item._doc;
      res.status(200).json(other);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

routes.get("/", VerifyandAdmin, (req, res) => {
  const query = req.query.new;
  if (query) {
    User.find()
      .sort({_id:-1})
      .limit(5)
      .then((item) => {
        // const {password,...other}=item._doc;
        res.status(200).json(item);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  } else {
    User.find()
      .then((item) => {
        // const {password,...other}=item._doc;
        res.status(200).json(item);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  }
});

module.exports = routes;
