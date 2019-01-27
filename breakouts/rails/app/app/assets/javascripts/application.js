// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require_tree .
// Get user info
$.ajax({
    url: "/api/user",
    method: "GET"
}).then(function(data) {
    console.log(data)
    $(".username").text(data.username)
})

// Get all user's movies
function displayAllSaved() {
    $.ajax({
        url: "/api/movies/user/all",
        method: "GET"
    }).then(function(data) {
        console.log(data)
        $("#savedMovies").empty()
        for (var i = 0 ; i < data.length ; i++) {
         $("#savedMovies").append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                <img class="movie__card--img" src="${data[i].movie_poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].movie_name}</h5>
                        <p class="card-text">${data[i].movie_year}</p>
                    </div>
                </div>
            </div>
            `)
        }
    })
}

$(document).on("submit", "#movieSearch", function(e) {
    e.preventDefault()
    var movie = $("#movie").val().trim()
    $.ajax({
        url: `/api/movies/${movie}`,
        method: "GET"
    }).then(function(data) {
        console.log(data)
        $("#searchedMovie").html(
        `

        <div class="card" style="width: 18rem;">
        <img class="searched-movie--img" src="${data.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.Title}</h5>
                <p class="card-text">${data.Year}</p>
                <button class="saveMovie" data-name="${data.Title}" data-poster="${data.Poster}" data-year="${data.Year}">Save</button>
            </div>
        </div>
        `
        )
    })
}) 

$(document).on("click", ".saveMovie", function(e) {
    var name = $(this).data("name")
    var poster = $(this).data("poster")
    var year = $(this).data("year")

    var movieObj = {
        name: name,
        poster: poster,
        year: year
    }

    $.ajax({
        url: "/api/movies/save",
        method: "POST",
        data: movieObj
    }).then(function(data) {
        console.log(data)
        displayAllSaved()
        $("#searchedMovie").html("Movie Saved!")
    })
})


$(document).on("submit", "#signUpForm", function(e) {
    console.log("eyo")
    e.preventDefault()
    var username = $("#username").val().trim()
    $.ajax({
        url: `/api/signin/${username}`,
        method: "POST"
    }).then(function(data) {
        window.location.href = "/home"
    })
})