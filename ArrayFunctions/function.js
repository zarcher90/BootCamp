//optional task building your own forEach function. Array.prototype allows you to add to all arrays. 
//now we can call array.myForEach!! must be above where you call. intialized before array uses it.
Array.prototype.myForEach = function(func){
    //looping through array
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

var array = [1,2,3,4];
var anotherArray = [1,1,1,1,1];

printReverse(array);
isUniform(anotherArray);
isUniform(array);
sumArray(array);
maxArray(array);

array.myForEach(print); //Bonus

function print(item){
    console.log(item);
}

function printReverse(reverse){

    reverse.reverse(); //totally reverse array and is saved. So when you recall the array it is still reversed. 
    reverse.forEach(function(item, i){
        console.log(item);
    })
    reverse.reverse();//adding this to change array back. This is easier to wright than for looping
}

function isUniform(anotherArray){
    var checkValue = anotherArray[0];
    var uniform = true;

    anotherArray.forEach(function(item){
        if(checkValue !== item){
            uniform = false;
        }
    })

    console.log(uniform);
}

function sumArray(sumArray){
    var sum = 0;

    sumArray.forEach(function(item){
        sum += item;
    })

    console.log(sum);
}

function maxArray(maxArray){
    var max = 0;

    maxArray.forEach(function(item){
        if(item > max){
            max = item;
        }
    })

    console.log(max);
}

