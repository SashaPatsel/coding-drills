// To create our server and manage our routes
var express = require("express");
// To read our API returns more easily
var bodyParser = require("body-parser")
// To ping APIs
var request = require("request")
// TO use HTMl files
var path = require("path")

var app = express()
var PORT = 3002

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static("public"));


 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

