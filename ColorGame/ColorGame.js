var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("messageDisplay");
var topDisplay = document.getElementById("topDisplay");
var resetButton = document.getElementById("resetButton");
var hardButton = document.getElementById("hardButton");
var easyButton = document.getElementById("easyButton");
var difficulty = "hard";
var colors = [];
var goalColor;

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    difficulty = "hard";
    gameSetup(difficulty);
});

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    difficulty = "easy";
    for(var i = 0; i < 6; i++){
        //Setting initial Background colors.
        squares[i].style.backgroundColor = "#232323";
    }
    gameSetup(difficulty);

})

resetButton.addEventListener("click", function(){gameSetup(difficulty)});

gameSetup(difficulty);

for(var i = 0; i < colors.length; i++){
    squares[i].addEventListener("click", function click(){
        if(this.style.backgroundColor === goalColor){
            correctSquareColor(goalColor);
            message.textContent = "Correct!";
            topDisplay.style.background = goalColor;
            resetButton.textContent = "Play again?"
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })
}



function correctSquareColor(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColorArray(length){

    var colorArray = [];
    for(var i = 0; i < length; i++){
        colorArray.push("rgb("+pickColor(0,255)+", "+pickColor(0,255)+", "+pickColor(0,255)+")");
    }

    return colorArray;
}

function gameSetup(difficulty){
    topDisplay.style.backgroundColor = "#578cee";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    if(difficulty === "hard"){
        //generate all new colors
        colors = generateColorArray(6);
        //pick new goal color
        goalColor = colors[pickColor(1, 6)];
    }else{
        //generate all new colors
        colors = generateColorArray(3);
        //pick new goal color
        goalColor = colors[pickColor(1, 3)];
    }
    
    colorDisplay.textContent = goalColor;
    for(var i = 0; i < colors.length; i++){
        //Setting initial Background colors.
        squares[i].style.backgroundColor = colors[i];
    }
}