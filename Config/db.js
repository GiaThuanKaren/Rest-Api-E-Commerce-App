const mongoose = require('mongoose');
module.exports = function ConnectDB() {
  mongoose
    .connect("mongodb://localhost:27017/EcommercialWEB")
    .then((resp) => {
      console.log("Succed");
    })
    .catch((e) => {
      console.log(e + "Loi");
    });
};
