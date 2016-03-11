var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname;

app.use(express.static(__dirname));

router.use(function (req,res,next) {
  console.log("/" + req.method + " " + req.originalUrl);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "/404.html");
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Live at Port 3000");
});
