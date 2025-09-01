// Select the form element from the DOM
const form = document.querySelector("form")
console.log(form);

//Do NOT extract values outside event listener – form elements aren’t filled yet at page load.
// this usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value)


// Add a submit event listener to the form
form.addEventListener( 'submit', function(event){

    // Prevent form from refreshing the page
    event.preventDefault();
    // console.log(event);  
   
    const height = parseInt(document.querySelector("#height").value); 
    console.log("Height: ", height);
    
    const weight = parseInt(document.querySelector("#weight").value);
    console.log("Weight: ", weight);

    let results = document.getElementById("results");
    console.log(results);
    
    /*height === "" is not needed — because: parseInt("") results in NaN, and you're already checking isNaN(height) */

    if(height === "" || height<0 || isNaN(height) || height>250)
    {
        results.innerHTML = `🚫 Invalid Height: ${height}. Please enter a height between 1 and 250 cm.`;
        console.warn("Invalid height entered.");
    }
    else if(weight ==="" || weight<0 || isNaN(weight) || weight>650)
    {
        results.innerHTML = `🚫 Invalid Weight: ${weight}. Please enter a number between 1 and 650 kg`;
        console.warn("Invalid weight entered.");
    }
    else{
        // Calculate BMI using the formula: BMI = weight / (height in meters)^2
        const BMI = (weight / ( ( height * height ) / 10000)).toFixed(2);

        //show the BMI
        if(BMI <= 18.6)
        {
            results.innerHTML = `🟡 Your BMI is ${BMI}. You are Under Weight.Please consider a nutrition plan 🍽️!`;
            console.info("User is underweight.");
        }
        else if(BMI<25 && BMI>18.6)
        {
            results.innerHTML = `🟢Your BMI is ${BMI}. You are in Normal Range. Well Done Keep it  💪!`;
            console.info("User is in normal weight range.");

        }
        else{
            results.innerHTML = `🔴Your BMI is ${BMI}. You are OverWeight. Consider a balanced diet and exercise! 🏃‍♂️🥦`;
            console.info("User is overweight.");
        }
    }

})