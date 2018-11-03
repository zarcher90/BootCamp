var button = document.querySelector("button");
var body = document.querySelector("body");
// var isPurple = false;

// button.addEventListener("click", function(){
//     if(!isPurple){
//         body.bgColor = "purple";
//     }else{
//         body.bgColor = "white";
//     }
//     isPurple = !isPurple;
// });

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});