$(document).ready(function () {

  $.get("/api/restaurants", function (res) {
    console.log(res)

    for (var i = 0 ; i < res.length ; i++) {
        $(".restaurants").append("<div><h3>" + res[i].restaurant_name + "</h3><a href='"+ res[i].restaurant_link +"'> <img class='restaurant__img' src=" + res[i].restaurant_img +"></a><p>STARS: "+ res[i].rating +"</p> </div>")
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


    $(".stars2").hover(function() {
        
        $(".stars1").addClass("star-gold")
        $(".stars2").addClass("star-gold")
    })


    $(".stars3").hover(function() {
        
        $(".stars1").addClass("star-gold")
        $(".stars2").addClass("star-gold")
        $(".stars3").addClass("star-gold")
    })

    $(".stars4").hover(function() {
        
        $(".stars1").addClass("star-gold")
        $(".stars2").addClass("star-gold")
        $(".stars3").addClass("star-gold")
        $(".stars4").addClass("star-gold")
    })

    $(".stars5").hover(function() {
        
        $(".stars1").addClass("star-gold")
        $(".stars2").addClass("star-gold")
        $(".stars3").addClass("star-gold")
        $(".stars4").addClass("star-gold")
        $(".stars5").addClass("star-gold")
    })
    $(".stars5").mouseleave(function() {
        $(".stars1").removeClass("star-gold")
        $(".stars2").removeClass("star-gold")
        $(".stars3").removeClass("star-gold")
        $(".stars4").removeClass("star-gold")
        $(".stars5").removeClass("star-gold")
    })

    $(".stars4").mouseleave(function() {
        $(".stars1").removeClass("star-gold")
        $(".stars2").removeClass("star-gold")
        $(".stars3").removeClass("star-gold")
        $(".stars4").removeClass("star-gold")
        $(".stars5").removeClass("star-gold")
    })

    $(".stars3").mouseleave(function() {
        $(".stars1").removeClass("star-gold")
        $(".stars2").removeClass("star-gold")
        $(".stars3").removeClass("star-gold")
        $(".stars4").removeClass("star-gold")
        $(".stars5").removeClass("star-gold")
    })

    $(".stars2").mouseleave(function() {
        $(".stars1").removeClass("star-gold")
        $(".stars2").removeClass("star-gold")
        $(".stars3").removeClass("star-gold")
        $(".stars4").removeClass("star-gold")
        $(".stars5").removeClass("star-gold")
    })

    $(".stars1").mouseleave(function() {
        $(".stars1").removeClass("star-gold")
        $(".stars2").removeClass("star-gold")
        $(".stars3").removeClass("star-gold")
        $(".stars4").removeClass("star-gold")
        $(".stars5").removeClass("star-gold")
    })







})