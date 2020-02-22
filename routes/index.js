var express = require("express");
var router = express.Router();
var user = require("../schemas/user.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(user);
  /*user
    .find()
    .limit(20)
    .then(doc => {
      res.render("index", { items: doc });
    });*/
  res.render("index");
});

module.exports = router;
