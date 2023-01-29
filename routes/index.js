var express = require("express");
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});
router.get("/new", (req, res, next) => {
  res.render("form");
});
router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.Message,
    user: req.body.AuthorName,
    add: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
