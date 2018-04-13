//Variables
var postCardButton= document.getElementById("PostCardPage");
//Functions

//Run code
postCardButton.addEventListener("click", function(){
  window.location.href= "../PostCard/index.html"
});

//jquery

//Scrolling
$(document).ready(function (){
$("#AboutUsPage").click(function (){
  $('html, body').animate({
      scrollTop: $("#aboutUsHead").offset().top
  }, 1000);
  });
    
$("#HowToPage").click(function (){
  $('html, body').animate({
      scrollTop: $("#howToHead").offset().top
  }, 1000);
  });
});
