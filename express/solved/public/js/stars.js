//========== HOVER ============

$(document).on("mouseenter", ".stars1", function() {
        
  $(".stars1").addClass("star-hov")

})

$(document).on("mouseenter", ".stars2", function() {
        
  $(".stars1").addClass("star-hov")
  $(".stars2").addClass("star-hov")
})


$(document).on("mouseenter", ".stars3", function() {
  
  $(".stars1").addClass("star-hov")
  $(".stars2").addClass("star-hov")
  $(".stars3").addClass("star-hov")
})

$(document).on("mouseenter", ".stars4", function() {
  
  $(".stars1").addClass("star-hov")
  $(".stars2").addClass("star-hov")
  $(".stars3").addClass("star-hov")
  $(".stars4").addClass("star-hov")
})

$(document).on("mouseenter", ".stars5", function() {
  
  $(".stars1").addClass("star-hov")
  $(".stars2").addClass("star-hov")
  $(".stars3").addClass("star-hov")
  $(".stars4").addClass("star-hov")
  $(".stars5").addClass("star-hov")

})

//========== ON CLICK ============

$(document).on("click", ".stars1", function() {
        
  $(".stars1").addClass("star-click")

  $(".stars2").removeClass("star-click")
  $(".stars3").removeClass("star-click")
  $(".stars4").removeClass("star-click")
  $(".stars5").removeClass("star-click")

})

$(document).on("click",".stars2", function() {
        
  $(".stars1").addClass("star-click")
  $(".stars2").addClass("star-click")

  $(".stars3").removeClass("star-click")
  $(".stars4").removeClass("star-click")
  $(".stars5").removeClass("star-click")
})


$(document).on("click",".stars3", function() {
  
  $(".stars1").addClass("star-click")
  $(".stars2").addClass("star-click")
  $(".stars3").addClass("star-click")

  $(".stars4").removeClass("star-click")
  $(".stars5").removeClass("star-click")

})

$(document).on("click", ".stars4",function() {
  
  $(".stars1").addClass("star-click")
  $(".stars2").addClass("star-click")
  $(".stars3").addClass("star-click")
  $(".stars4").addClass("star-click")


  $(".stars5").removeClass("star-click")

})

$(document).on("click", ".stars5",function() {
  
  $(".stars1").addClass("star-click")
  $(".stars2").addClass("star-click")
  $(".stars3").addClass("star-click")
  $(".stars4").addClass("star-click")
  $(".stars5").addClass("star-click")



})

//========== MOUSE LEAVE ============

$(document).on("mouseleave", ".stars5",function() {
  $(".stars1").removeClass("star-hov")
  $(".stars2").removeClass("star-hov")
  $(".stars3").removeClass("star-hov")
  $(".stars4").removeClass("star-hov")
  $(".stars5").removeClass("star-hov")
})

$(document).on("mouseleave", ".stars4",function() {
  $(".stars1").removeClass("star-hov")
  $(".stars2").removeClass("star-hov")
  $(".stars3").removeClass("star-hov")
  $(".stars4").removeClass("star-hov")
  $(".stars5").removeClass("star-hov")
})

$(document).on("mouseleave", ".stars3",function() {
  $(".stars1").removeClass("star-hov")
  $(".stars2").removeClass("star-hov")
  $(".stars3").removeClass("star-hov")
  $(".stars4").removeClass("star-hov")
  $(".stars5").removeClass("star-hov")
})

$(document).on("mouseleave", ".stars2",function() {
  $(".stars1").removeClass("star-hov")
  $(".stars2").removeClass("star-hov")
  $(".stars3").removeClass("star-hov")
  $(".stars4").removeClass("star-hov")
  $(".stars5").removeClass("star-hov")
})

$(document).on("mouseleave", ".stars1",function() {
  $(".stars1").removeClass("star-hov")
  $(".stars2").removeClass("star-hov")
  $(".stars3").removeClass("star-hov")
  $(".stars4").removeClass("star-hov")
  $(".stars5").removeClass("star-hov")
})

