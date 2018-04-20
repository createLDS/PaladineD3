//Variables

//Functions

//Run code

// -- MENU code

var menuButton = document.getElementById("menu"),
    homeButton = document.getElementById("homeNav"),
    destButton= document.getElementById("destNav"),
    aboutButton= document.getElementById("aboutNav"),
    contactButton= document.getElementById("contactNav"),
    quizButton= document.getElementById("quizNav"),
    dBlock= document.getElementById("block"),
    open=false;


menuButton.addEventListener("click", function(){
  Boolean(open);

  if(open == false){
  menuButton.innerHTML= "X";
      
  destButton.style.display= "block";
    aboutButton.style.display= "block";
    contactButton.style.display= "block";
    quizButton.style.display= "block";
      
  //dBlock.style.display= "none";

  homeButton.style.left= "130px";
  homeButton.style.width= "300px";
  homeButton.style.borderRadius= "5%";
  homeButton.style.opacity= "1";
  destButton.style.opacity= "1";
  aboutButton.style.opacity= "1";
  contactButton.style.opacity= "1";
  quizButton.style.opacity= "1";


  setTimeout(function(){
    destButton.style.top= "60px";
    aboutButton.style.top= "115px";
    contactButton.style.top= "170px";
    quizButton.style.top= "225px";
  }, 210);

  open = true;
  }
  else if(open == true) {
    menuButton.innerHTML= "MENU";
      
    //dBlock.style.display= "block";

    destButton.style.opacity= "0";
    aboutButton.style.opacity= "0";
    contactButton.style.opacity= "0";
    quizButton.style.opacity= "0";
    destButton.style.top= "5px";
    aboutButton.style.top= "5px";
    contactButton.style.top= "5px";
    quizButton.style.top= "5px";

    setTimeout(function(){
        destButton.style.display= "none";
        aboutButton.style.display= "none";
        contactButton.style.display= "none";
        quizButton.style.display= "none";
    }, 110);
    setTimeout(function(){
      homeButton.style.left= "5px";
      homeButton.style.width= "50px";
      homeButton.style.opacity= "0";
        
    }, 380);


    open = false;
  }
});

homeButton.addEventListener("mouseenter", function(){
  homeButton.style.top= "10px";
  //homeButton.style.height= "60px";
  homeButton.style.left="120px";
  homeButton.style.width= "320px";
});

homeButton.addEventListener("mouseout", function(){
  homeButton.style.top= "5px";
  //homeButton.style.height= "50px";
  homeButton.style.left="130px";
  homeButton.style.width= "300px";
});

destButton.addEventListener("mouseenter", function(){
  destButton.style.top= "55px";
  destButton.style.height= "60px";
  destButton.style.left="120px";
  destButton.style.width= "320px";
});

destButton.addEventListener("mouseout", function(){
  destButton.style.top= "60px";
  destButton.style.height= "50px";
  destButton.style.left="130px";
  destButton.style.width= "300px";
});

aboutButton.addEventListener("mouseenter", function(){
  aboutButton.style.top= "110px";
  aboutButton.style.height= "60px";
    aboutButton.style.left="120px";
  aboutButton.style.width= "320px";
});

aboutButton.addEventListener("mouseout", function(){
  aboutButton.style.top= "115px";
  aboutButton.style.height= "50px";
    aboutButton.style.left="130px";
  aboutButton.style.width= "300px";
});

contactButton.addEventListener("mouseenter", function(){
  contactButton.style.top= "165px";
  contactButton.style.height= "60px";
    contactButton.style.left="120px";
  contactButton.style.width= "320px";
});

contactButton.addEventListener("mouseout", function(){
  contactButton.style.top= "170px";
  contactButton.style.height= "50px";
    contactButton.style.left="130px";
  contactButton.style.width= "300px";
});

quizButton.addEventListener("mouseenter", function(){
  quizButton.style.top= "220px";
  quizButton.style.left="120px";
  quizButton.style.width= "320px";

});

quizButton.addEventListener("mouseout", function(){
  quizButton.style.top= "225px";
  quizButton.style.left="130px";
  quizButton.style.width= "300px";
});


//-- href to pages

homeButton.addEventListener("click", function(){
    window.location.href= "../Landing/index.html"
});

destButton.addEventListener("click", function(){
    window.location.href= "../PostCard/index.html"
});

quizButton.addEventListener("click", function(){
    window.location.href= "../quiz/index.html"
});

aboutButton.addEventListener("click", function(){
   window.location.href= "../About/index.html"; 
});

contactButton.addEventListener("click", function(){
   window.location.href= "../Contact/index.html"; 
});

// -- MENU CODE
