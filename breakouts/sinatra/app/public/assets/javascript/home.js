
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
    $.ajax({
        url: `/movies/${movie}`
    })
})