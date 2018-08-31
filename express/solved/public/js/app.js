$(document).ready(function () {

  $.get("/api/restaurants", function (res) {
    console.log(res)

    for (var i = 0 ; i < res.length ; i++) {
        
        $(".restaurants").append("<div><h3>" + res[i].restaurant_name + "</h3><a href='"+ res[i].restaurant_link +"'> <img class='restaurant__img' src=" + res[i].restaurant_img +"></a><p>STARS: "+ res[i].rating +"</p>  <div class='rating-contain'><div class='stars-contain stars1'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars2'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars3'><i class='fa fa-star stars' aria-hidden='true'></i> </div><div class='stars-contain stars4'><i class='fa fa-star stars' aria-hidden='true'></i></div><div class='stars-contain stars5'><i class='fa fa-star stars' aria-hidden='true'></i></div></div> </div>")
    }

    

    })

    $("#newRestaurant").on("submit", function() {
        var newRestaurant = {
            restaurant_name: $("#restauarant_name").val().trim(),
            restaurant_link: $("#restauarant_link").val().trim(),
            restaurant_img: $("#restauarant_img").val().trim(),
            rating: $("#rating").val().trim(),
        }

        $.ajax({
            type: "POST",
            url: "/api/restaurants/new",
            data: newRestaurant
          })
    })









})