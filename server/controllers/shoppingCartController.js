// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcrypt');
const { User } = require("../models/shoppingCart");
const shoppingCartController = {};

shoppingCartController.createUser = (req, res, next) => {
  console.log('this is req body', req.body)
  const user = new User(req.body);
  //mongoose command to put this instance of User into db
  const newUser = User.create(user, (err, newUser) => {
    res.locals.user = newUser;
    if (err)
      return next(
        "Error in shoppingCartController.createUser: " + JSON.stringify(err)
      );
    else {
      return next();
    }
  });
};

shoppingCartController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log("username, password", username, password);
  User.findOne({ username }, (err, user) => {
    if (!user) {
      console.log("username not found");
      res.redirect("/signup");
    } else {
      if (password === user.password) return next();
      else return res.redirect(301, "/signup");
    }
  });
};

module.exports = shoppingCartController;
