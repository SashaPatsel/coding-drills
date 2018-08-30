$(document).ready(function () {
  $.get("/api", function (res) {
    console.log(res)
    var data = [];
    var labels = [];
    var bGround = []
    var border = []
    for (var i = 0 ; i < res.length ; i++) {
      data.push(res[i].v)
      labels.push(res[i].t)
      border.push("rgba(0,0,0,1)")
      if (res[i].v > 2) {
        bGround.push("rgba(250,30,20,.7")
      } else {
        bGround.push("rgba(20,30,250,.7)")
        
      }
      
    }

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tide Throughout The Day',
                data: data,
                backgroundColor: bGround,
                borderColor: border,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    $("#myChart").attr("style", "height:auto; width: 80%")
    // $("#myChart").style.height = "300px"


  })
// 







})