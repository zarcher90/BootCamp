var usresponse = prompt("Are we there yet?");

while(usresponse.indexOf("yes") && usresponse.indexOf("yeah"))
{
    usresponse = prompt("Are we there yet?");
}

alert("Yay we made it!!");