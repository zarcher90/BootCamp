//checking off todos
// $("ul").on("click","li",function(){
//     $(this).toggleClass("completed");
// });

//Click on X to delete todos
// $("ul").on("click","span",function(event){
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// //Add new todo
// $(":text").keypress(function(event){
//     //if enter is hit
//     if(event.which === 13){
//         //add todo to list
//         var todoText = $(this).val();
//         $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
//         $(":text").val("");
//     }
// });

// $("#plusButton").click(function(){
//     $(":text").fadeToggle();
// })

//now going to write everything in JavaScript and not use JQuery.....
//checking off todos
var ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
    //If the li was clicked
    if(e.target.nodeName == "LI"){
        //Mark it as completed
        e.target.classList.toggle("completed");
    }
    //Else if the span was clicked
    else if(e.target.nodeName == "SPAN"){
        //Delete the span and the li
        e.target.parentElement.remove();
    }
    //Else if Icon was clicked delete two levels
    else{
        e.target.parentElement.parentElement.remove();
    }
});

//Plus button to get new todo window
var plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", function(){
    document.getElementById('inputText').style.display = "block";
});

//Add new todo
document.getElementById("inputText").addEventListener("keypress", function(e){
    //If enter is hit
    console.log(e.which)
    if(e.which === 13){
        //Add todo to the list
        var todoText = this.value;
        var li = document.createElement("li");
        li.innerHTML = "<span><i class='fas fa-trash'></i></span> ";
        li.appendChild(document.createTextNode(todoText));
        ul.appendChild(li);
        this.value = "";
    }
})