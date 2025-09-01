let insert = document.querySelector("#insert");

let checkKey = function (event) {
  insert.innerHTML = `
    <div><h2>Your Pressed Key is: </h2></div>
    <div class='KeyTable'>
    <table >
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${event.key === " " ? "Space" : event.key}</td>
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
    </tr>
    </table>
    </div>`;
};

window.addEventListener("keydown", checkKey);

/*Note:-
1.You are calling the function immediately by using () — this runs checkKey() right now, 
and the result (undefined) is passed to addEventListener. That means the event listener is not set properly.
2.//check if key is " "-->space 
3.This is a common mistake — you're not writing an IIFE, 
but you're still calling the function immediately, which you don't want in this context.
4. Displaying Key Info:
   - event.key: the actual key pressed
   - event.keyCode: numerical code (legacy)
   - event.code: physical key location on keyboard*/
