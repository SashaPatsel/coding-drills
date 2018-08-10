function getWeather(){
  var query = "?q=weather";
  var city = "&c=san%francisco";
  var baseURL = "https://funwithajax.herokuapp.com/api";

  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/"+baseURL+query+city,
    method: "GET"
  })
  .then(function(res){

    console.log("weather res:", res);

    $("body").removeClass("hero-BKG");
    $("body").removeClass("music-BKG");

    $("body").addClass("weather-BKG");

    $("#wrap").removeClass("blue");

    $("#content").removeClass("music");
    $("#content").removeClass("heroes");

    $("#content").addClass("weather-wrap")

    $("#content").empty();

    createWeatherHTML(res);
    
  });
}

function createWeatherHTML(res){

  var weather = $("<div>").addClass("weather");

  var title = $("<h2>");
  title.text(res.name);

  var row1 = $("<div>").addClass("row row1");

  var col1 = $("<div>").addClass("col-xs-6 col-sm-12 col-md-12 col-lg-6");

  var image = createIconHTML(res);

  // description
  var descrip = $("<p>");
  descrip.text(res.weather[0].description);

  $(col1).append(image, descrip);

  var col2 = $("<div>").addClass("col-xs-6 col-sm-12 col-md-12 col-lg-6");
  
  handleTemp(res, col2);
  
  // high and low temps
  var row2 = $("<div>").addClass("row row2");

  // high 
  var col3 = $("<div>").addClass("col-xs-6 col-sm-12 col-md-12 col-lg-6");

  var highTemp = res.main.temp_max.toString().split(".");
  highTemp = highTemp[0];

  var high = $("<p>").html("high temp of <br>" + highTemp + "&#8457;");

  $(col3).append(high);

  // low
  var col4 = $("<div>").addClass("col-xs-6 col-sm-12 col-md-12 col-lg-6");

  var lowTemp = res.main.temp_min.toString().split(".");
  lowTemp = lowTemp[0];

  var low = $("<p>").html("low temp of <br>" + lowTemp + "&#8457;");

  $(col4).append(low);

  $(row1).append(col1, col2);
  $(row2).append(col3, col4);

  $(weather).append(title, row1, row2);

  $("#content").append(weather);
}

function handleTemp(res, col2){

  // temp 
  var temp = $("<h3>");

  var tempTxt = res.main.temp.toString().split(".");
  tempTxt = tempTxt[0]

  // add DEGREE FAHRENHEIT html symbol
  temp.html( tempTxt + "&#8457;");

  if(tempTxt >= 75){
    temp.addClass("hot");
  }
  else if(tempTxt < 75 && tempTxt >= 55) {
    temp.addClass("nice");
  }
  else if(tempTxt < 55){
    temp.addClass("cold");
  }

  $(col2).append(temp);
}

function createIconHTML(res){
  // image
  var image = $("<img>");
  image.addClass("weather-img");

  var icon = res.weather[0].icon;

  image.attr("src", "http://openweathermap.org/img/w/" + icon + ".png");

  return image;
}

getWeather();