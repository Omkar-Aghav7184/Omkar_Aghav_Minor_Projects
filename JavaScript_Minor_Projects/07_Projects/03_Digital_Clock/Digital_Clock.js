//It gives null value when you are using "#clock" in getElementById("#clock"); 
// const clock = document.getElementById("#clock");

const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')
const today = document.querySelector("#today");

console.log(clock);
console.log(today);

// Display today's date
let currentDate= new Date();
console.log(currentDate.toDateString());
today.innerHTML = `📅 Today is: ${currentDate.toDateString()}`; 

// today.innerHTML += currentDate.toDateString();

// Update clock every second
setInterval( function(){

    let time= new Date();
    let digital_clock =time.toLocaleTimeString();
    console.log(digital_clock);
    clock.innerHTML= `⏱️ ${digital_clock}`;
},1000)


