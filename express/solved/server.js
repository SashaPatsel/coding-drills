// To create our server and manage our routes
var express = require("express");
// To read our API returns more easily
var bodyParser = require("body-parser")
// To ping APIs
var request = require("request")
// TO use HTMl files
var path = require("path")
// To query our db
var mysql = require("mysql");

var app = express()
var PORT = 3002

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "restaurantsDB"

})

connection.connect(function(err) {
  if (err) throw err
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static("public"));


 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })

 app.get("/api/restaurants", function(req, res) {


  connection.query("SELECT * FROM restaurants", function(err, response) {
    return res.json(response)
  })

 })




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

