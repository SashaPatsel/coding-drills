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
app.use(express.static("public"));
var tides = []

var query = "https://tidesandcurrents.noaa.gov/api/datagetter?station=9414290&begin_date=20180829&end_date=20180830&product=water_level&format=json&units=english&time_zone=lst&datum=mtl"

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })

 app.get("/", function(req, res){
  request(query, function (err, res, body) {
    if (err) {
      console.log(err)
    }
  
    // console.log(JSON.parse(body).data)
    //t = time & date
    //v = value in feet/meters
    var tides = []
    var datum = JSON.parse(body).data
    for (var i = 0 ; i < datum.length ; i += 5) {
      tides.push(datum[i])
    }

    return res.json(tides)
  
  })
 })

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

