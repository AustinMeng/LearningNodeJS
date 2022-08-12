var express = require("express");
var app = express();

app.get("/", function (req, res) {
  console.log("/");
  res.end("hello world");
});
app.get("/user", function (req, res) {
  console.log("/user");
  res.end("hello world user");
});
app.get("/next", function (req, res, next) {
  //next 表示由下一个路由,通过调用next()交给下一个路由处理。没有next的是精确匹配
  console.log("/next");
  next();
});
app.get("/next", function (req, res) {
  console.log("last next/");
  res.end("next");
});

app.listen(8080);
