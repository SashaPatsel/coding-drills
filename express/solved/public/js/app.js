$(document).ready(function () {

  $.get("/api/restaurants", function (res) {
    console.log(res)

    for (var i = 0 ; i < res.length ; i++) {
        $(".restaurants").append("<div><h3>" + res[i].restaurant_name + "</h3><a href='"+ res[i].restaurant_link +"'> <img class='restaurant__img' src=" + res[i].restaurant_img +"></a><p>STARS: "+ res[i].rating +"</p> </div>")
    }

    

    })






})