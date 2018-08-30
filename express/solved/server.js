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
var tides = []

var queryDate = "20180829"
// var lastYear = queryDate.replaceAt(3, (parseInt(queryDate[3]) -1).toString())
// var lastYear = setCharAt(queryDate,3,(parseInt(queryDate[3]) -1).toString())
console.log(lastYear)

var query = "https://tidesandcurrents.noaa.gov/api/datagetter?station=9414290&begin_date=20180829&end_date="+ queryDate +"&product=water_level&format=json&units=english&time_zone=lst&datum=mtl"

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })

 var tides = []


 function getData() {
  request(query, function (err, res, body) {
    if (err) {
      console.log(err)
    }
  
    // console.log(JSON.parse(body).data)
    //t = time & date
    //v = value in feet/meters
   
    var datum = JSON.parse(body).data
    for (var i = 0 ; i < datum.length ; i += 5) {
      tides.push(datum[i])
    }

    
  
  })
 }
getData()
console.log(tides)
 app.get("/api", function(req, res){

    return res.json(tides)
    // return res.json({key: "value"})
 
 })

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

