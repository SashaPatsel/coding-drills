
// Get user info
$.ajax({
    url: "/user",
    method: "GET"
}).then(function(data) {
    console.log(data)
    $(".username").text(data.username)
})

// Get all user's movies
$.ajax({
    url: "/movies/user/all",
    method: "GET"
}).then(function(data) {
    console.log(data)
    $("#savedMovies").empty()
    for (var i = 0 ; i < data.length ; i++) {
        console.log(data[i].name)
     $("#savedMovies").append(   `
        <div class="card" style="width: 18rem;">
        <img src="${data[i].movie_poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].movie_name}</h5>
                <p class="card-text">${data[i].movie_year}</p>
            </div>
        </div>
        `)
    }
})


$("#movieSearch").on("submit", function(e) {
    e.preventDefault()
    var movie = $("#movie").val().trim()
    $.ajax({
        url: `/movies/${movie}`,
        method: "GET"
    }).then(function(data) {
        console.log(data)
        $("#searchedMovie").html(
        `
        <h3>${data.Title}</h3>
        <img src=${data.Poster}>
        <button class="saveMovie" data-name="${data.Title}" data-poster="${data.Poster}" data-year="${data.Year}">Save</button>
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
        url: "/movies/save",
        method: "POST",
        data: movieObj
    }).then(function(data) {
        console.log(data)
    })
})