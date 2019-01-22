
// Get user info
$.ajax({
    url: "/user",
    method: "GET"
}).then(function(data) {
    console.log(data)
    $(".username").text(data.username)
})

$("#movieSearch").on("submit", function(e) {
    e.preventDefault()
    var movie = $("#movie").val().trim()
    $.ajax({
        url: `/movies/${movie}`,
        method: "GET"
    }).then(function(data) {
        console.log(data)
        $("#searchedMovie").append(
        `
        <h3>${data.Title}</h3>
        <img src=${data.Poster}>
        `
        )
    })
})