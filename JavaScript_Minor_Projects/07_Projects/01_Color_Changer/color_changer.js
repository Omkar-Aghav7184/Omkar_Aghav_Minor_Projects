console.log("Omkar");

// Selecting all elements with class 'button'
const buttons = document.querySelectorAll(".button");

// Selecting the body element to change its background color
const body = document.querySelector("body");
console.log(buttons);

buttons.forEach( function(buttons){

    console.log(buttons);

    // Add a click event listener to each button
    buttons.addEventListener('click', function(event){
        
        console.log(event); //Full event object
        console.log(event.target.id); //Logs the ID of the clicked button

        if( event.target.id === "grey")
        {
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === "white")
        {
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === "blue")
        {
            body.style.backgroundColor = event.target.id;
        }
        else{
            body.style.backgroundColor = event.target.id;
        }

        /*
         /Note: *
        ✅ SWITCH VERSION (commented)
        This is cleaner than if-else and allows better control.
        However, it's commented out. You should prefer this over if-else for scalability.
        const color = event.target.id;
        
        switch(color)
        {
            case "lightgrey": body.style.backgroundColor = color;
                         break;
            case "white": body.style.backgroundColor = color;
                          break;
            case "skyblue": body.style.backgroundColor = color;
                           break;
            case "yellow": body.style.backgroundColor = color;
                           break;
            case "lightgreen": body.style.backgroundColor = color;
                          break;
            case "orchid": body.style.backgroundColor = color;
                         break;
            case "orange": body.style.backgroundColor = color;
                         break;
            default: console.warn("Unknown color ID:", color);
        }
        */
        
    })
    
})
