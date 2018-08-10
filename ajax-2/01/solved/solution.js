/* 
	Before you begin install this chrome extennsion: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en 
	make sure the extension is enabled, will be a green icon not red
*/

/* 
	add https://funwithajax.herokuapp.com/api/* to intercepted URLs and patterns 
*/

/*
	Create a ready event to make all function available after the document is loaded
*/

$(document).ready(function () {

  /*///////////// HEROES ACTIVITY ///////////////////*/

  /* Base query url https://funwithajax.herokuapp.com/api/ */

  /* 
    Create a function call `getHeroes` 
      Call your function in order to view results 
  */
 function getHeroes(){

  var cors = "https://cors-anywhere.herokuapp.com/";
  var baseURL = "https://funwithajax.herokuapp.com/api";
  var query = "?q=heroes";

  $.ajax({
    url: cors+baseURL+query,
    method: "GET"
  })
  .then(function(res){

    console.log("heroes res",res);

    $("body").removeClass("weather-BKG ");
    $("body").removeClass("music-BKG");

    $("body").addClass("hero-BKG");

    $("#wrap").addClass("blue");

    $("#content").removeClass("music");
    $("#content").removeClass("weatherWrap");

    $("#content").addClass("heroes");

    $("#content").empty();

    renderHeroesHtml(res);

  });
}

function renderHeroesHtml(res){

  var row = $("<div>").addClass("row");

  res.forEach(function(squad){

    var col = $("<div>").addClass("col-sm-12 col-md-6 col-lg-6");

    var header = $("<div>").addClass("header1 header");
    header.html("<h2>"+squad.squadName+"</h2>");
    $(col).append(header);

    var characters = $("<div>");
    characters.addClass("characters");

    createHeroesHtml(squad, characters);			

    $(col).append(characters);
    $(row).append(col);

  });

  $("#content").append(row);
}

function createHeroesHtml(squad, characters){
  squad.members.forEach(function(member){

    var memberWrap = $("<div>");
    memberWrap.addClass("hero");

    var imgWrap = $("<div>").addClass("img-wrap");

    var $image = $("<img>");
    $image.attr("src", member.image);
    $image.addClass("hero-image");

    $(imgWrap).append($image);

    var $name = $("<p>");
    $name.text(member.name);

    var $power = $("<p>");
    $power.text(member.powers[member.powers.length - 1]);

    $(memberWrap).append(imgWrap, $name, $power);
    $(characters).append(memberWrap);
  });
}

getHeroes();



});