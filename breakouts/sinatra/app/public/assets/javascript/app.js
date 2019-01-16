console.log("hi")

$.ajax({
    url: "/data",
    method: "GET"
}).then(function(data) {
    console.log(data)
})