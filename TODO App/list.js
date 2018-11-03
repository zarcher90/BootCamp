var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        listTodos();
    } else if(input === "new"){
        newTodo();
    } else if(input === "delete"){
        deleteTodos();
    }

    //ask agian for new input
    input = prompt("what would you like to do?");
}
console.log("Thanks for using TODO APP");

function listTodos(){
    console.log("************");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    })
    console.log("************");
}

function newTodo(){
     //ask for new todo
     var newTodo = prompt("Enter new todo");
     //add to todos array
     todos.push(newTodo);
     console.log("Todo has been added!");
}

function deleteTodos(){
    //ask for task number
    var delIndex = prompt("What Task number would you like to delete?");
    //delete task
    todos.splice(delIndex,1);
    console.log("Todo has been deleted!");
}