var express = require("express");
var bodyParser = require("body-parser")
var request = require("request")

var app = express()
var PORT = 3002

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})