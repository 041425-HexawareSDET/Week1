//I want to access the element that has id = "p1" - DOM SELECTION
const p1 = document.getElementById("p1")
console.log(p1) 

//Now that we've DOM selected the paragraph, we can do some...
//DOM Manipulation!!
//For instance, we can change the attributes of the paragraph
p1.setAttribute("title", "I was given a title with DOM Manipulation")
p1.setAttribute("style", "color:green; background-color:lightblue")

//While this is an easy example of DOM manipulation, we wouldn't really change attributes like this often

//Most times, our DOM manipulation will be EVENT LISTENERS-------

//DOM SELECT our button (id=btn1)
const btn1 = document.getElementById("btn1")

//Attach an event listener to the button
btn1.addEventListener("click", buttonFunction)
//addEventListener takes 2 params - the event to listen for, and the function to invoke.

//Let's also DOM select the empty paragraph with id == "p2"
const p2 = document.getElementById("p2")

function buttonFunction(){
    //alert() makes a popup on the screen
    alert("Thanks for clicking me!")

    //add text to the previously empty paragraph
    p2.innerText = "I have content thanks to the buttonFunction!"
}

//Let's see some other examples of events, just to show things besides clicks

//DOM Selection
const header = document.getElementById("header")

//Quicker way to add event listeners
header.onmouseover = mouseOverFunction
header.onmouseleave = mouseLeaveFunction

function mouseOverFunction(){
    header.setAttribute("style", "color:red")
    header.innerText = "You've scrolled over me!"
}

function mouseLeaveFunction(){
    header.setAttribute("style", "color:blue")
    header.innerText = "You've left me D:"
}