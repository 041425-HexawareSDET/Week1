//TODO: better notes and comprehensive examples of DOM Selection/Manipulation

//DOM Manipulation---------------

//DOM SELECT our button (id=btn1)
const btn1 = document.getElementById("btn1")

//Attach an event listener to the button
btn1.addEventListener("click", buttonFunction)
//addEventListener takes 2 params - the event to listen for, and the function to invoke.

function buttonFunction(){
    //alert() makes a popup on the screen
    alert("Thanks for clicking me!")
}