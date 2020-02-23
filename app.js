var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");

var app = express();
mongoose.connect(
  "mmongodb://nodehome:mandarinabonita@home-shard-00-00-ne7lo.mongodb.net:27017,home-shard-00-01-ne7lo.mongodb.net:27017,home-shard-00-02-ne7lo.mongodb.net:27017/debts?ssl=true&replicaSet=home-shard-0&authSource=admin&retryWrites=true&w=majorityongodb+srv://nodehome:mandarinabonita@home-ne7lo.mongodb.net/debts?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "aqui ta el pedo:"));
db.once("open", () => {
  console.log("entro");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
