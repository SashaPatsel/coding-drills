var express = require("express");
var path = require("path");


var app = express();
var PORT = 2018;

var Stack = function(data = []) {
 
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
    return this.data.pop()
  }

  this.peek = function() {
    return this.data[data.length -1]
  }

}

var backHistory = new Stack()
var forwardHistory = new Stack()


// API ROUTES

app.post("/new", function(req, res) {
  res.redirect()
})

app.get("/back", function(req, res) {
  console.log("histor",backHistory.remove())
  res.redirect("http://localhost:2018/rhino")
})

app.get("/forward", function(req, res) {
  forwardHistory.add()
})




// HTML ROUTES
app.get("/", function(req, res) {

  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/rhino", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "rhino.html"));
});

app.get("/gorilla", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "gorilla.html"));
});

app.get("/tiger", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "tiger.html"));
});

app.get("/eagle", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "eagle.html"));
});

app.get("/turtle", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "turtle.html"));
});

app.get("/buffalo", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "buffalo.html"));
});

app.get("/hippo", function(req, res) {
  console.log((`${req.originalUrl}`))
  backHistory.add(`${req.originalUrl}`)
  res.sendFile(path.join(__dirname, "hippo.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
