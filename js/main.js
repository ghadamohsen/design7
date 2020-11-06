function HoverButton(){
    document.getElementById("butt").style.backgroundColor = "#080";
}
function Hover(){
    document.getElementById("butt").style.backgroundColor = "#00bcba";
}
//  // // // //
var myButton = document.querySelector("#btn")
myButton.onclick = function() {
    var ipsum = document.getElementById('click');
    if(ipsum.style.visibility === 'hidden') {
        ipsum.style.visibility = 'visible';
    } else {
        ipsum.style.visibility ='hidden';
    }
}
//////////////////////////////
var n = 0;
function hoverImg(){
    n = n+1 ;
    document.getElementById("img1").innerHTML = n
}
////////////////////////////
function clc(){
    document.getElementById("clicks").style.color = '#f50';
    document.getElementById("clicks").style.textDecoration = "underline";
} 
///////////////////////////////
function valid(){
    var name = prompt("what is Your Name ?");
    if(name == "ghada"){
        window.location = 'index.html';
    }
}
