

var lat; 
var long;

var queryURLweather = "https://api.openweathermap.org/data/2.5/weather?q=" + "chicago" + "&APPID=" + "d8d64a31b79e4c92c420bd81c4289876";

$.ajax({
  url: queryURLweather,
  method: "GET"
}).then(function(response) {
  console.log(response)
})

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}