var numOfC= document.getElementsByName("numOfCountries"),
    fest= document.getElementsByName("fest"),
    i=0,
    disp= document.getElementById("display");

function checkQuiz(){
    if(numOfC[2].checked){
        i++;
    }
    if(fest[0].checked){
        i++
    }
    
}

function result(dnum){
    var newDiv = document.createElement("div");
    
    if(i==1){
        newDiv.innerHTML= "You got 1 out of 2 correct!";
    }
    else if(i==2){
        newDiv.innerHTML= "You got 2 out of 2 correct!";
    }
    disp.appendChild(newDiv);
}

document.getElementById("submit").addEventListener("click", function(){
    //console.log(numOfC[0]);
    checkQuiz();
    result(i);
});