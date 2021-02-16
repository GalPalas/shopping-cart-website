const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("mongodb://localhost/shopping-cart", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
