console.log("hi")

$.ajax({
    url: "/api",
    method: "GET"
}).then(function(data) {
    newData = JSON.parse(data)
    console.log(newData.urls.full)
    $(".test").append(`<img class="img" src= ${newData.urls.full}>`)
})