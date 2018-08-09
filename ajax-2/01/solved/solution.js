

var lat = -34.397
var long = 150.644;
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    zoom: 8
  });
}


$(".location").on("submit", function(event) {
  event.preventDefault()
  var city = $("#location").val()

  var queryURLweather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + "d8d64a31b79e4c92c420bd81c4289876";

  $.ajax({
    url: queryURLweather,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    lat = response.coord.lat
    long = response.coord.lon
    initMap()
  })


 
})

