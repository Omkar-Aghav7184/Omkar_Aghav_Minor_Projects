//Generate Random color
let randomColor = function(){
    // This is a string containing all the hexadecimal digits.
    let hexColor = "0123456789ABCDEF";
    let color ="#";
    // to generate a complete hex color, you need to select 6 random characters.
    for(let index=0;index<6;index++)
    {
        // This will randomly give you a character like "A" or "3".
        color+= hexColor[Math.floor(Math.random()*16)];
        // console.log(color);
    }
    // console.log((color));
    return color;
}

// To store the interval ID for later clearing
let intervalId=null;

// function to change background color
function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

let startChangingColor = function(){
    // Prevents multiple intervals from being created
    if(!intervalId)
    {
        // Only pass function reference — don't invoke it here
        intervalId = setInterval(changeBgColor,1000);
        // console.log(intervalId);
    }   
}

// Stops the background color changing
let stopChangingColor = function(){
    // console.log("clear",intervalId);
    clearInterval(intervalId); // Stop the interval loop
    intervalId = null; // Reset intervalId to allow restarting
}
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);

/*Common Mistake: Because you added (), which tells JavaScript: "Hey, run this function right now."
1. You are passing a reference to the function.
It will be called only when the event happens (e.g., button is clicked).
No () = no execution now.

2.This runs changeBgColor() once immediately, and passes the return value (undefined) to setInterval.
3.This assigns the function itself as a color string (which results in [object Function]).

4.If Math.random() gives:
0.1 → hex[1] → "1"
0.7 → hex[11] → "B"
0.3 → hex[4] → "4"

5.intervalId = null; // Reset intervalId to allow restarting.
6.Prevents multiple intervals from being created
    if(!intervalId){} */