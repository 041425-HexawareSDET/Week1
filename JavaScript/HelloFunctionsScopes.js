//We can call functions before they're defined due to something called HOISTING
helloWorld()

//This is a basic "named" function
function helloWorld(){
    console.log("Hola World")
}

//anon(234) <- Non-named functions are NOT HOISTED! So we can't invoke them before declaration

//Here's an anonymous function - it has no name, but it's assigned to a variable
anon = function(var1){
    console.log("Hi I'm an anonymous function stored in a variable")
    console.log("The value of my parameter is: " + var1)
} 

anon(777)

//Arrow functions are like Java lambdas - they take in a value and execute some functionality
//(values) => {some code to run}
arrowFunction = (var1, var2) => {
    //Let's test out == and === 
    console.log("---")

    console.log("Does " + typeof var1 + " " + var1 + " == " + typeof var2 + " " + var2 + "? ")
    console.log(var1 == var2)

    console.log("---")

    console.log("Does " + typeof var1 + " " + var1 + " === " + typeof var2 + " " + var2 + "? ")
    console.log(var1 === var2)
}

arrowFunction("2", 2)


//Callback functions - a function that gets passed as a parameter to another function
function f1(){
    console.log('Hello from function 1!')
}

function f2(someFunction){
    console.log("Hello from function 2!")
    console.log("Running Callback Function: ")
    someFunction()
    console.log("Callback Function Complete!")
}

//invoke f2, giving f1 as its parameter
f2(f1)

//invoke f2, and write an arrow function for its param
f2(()=> {console.log("Hello from the Arrow function!")})
//Arrow functions are nice because you can just define them where a function is expected. No need to save it!


console.log("=================================Global Scope")

//Anything that is globally scoped can be accessed anywhere in our script (the JS file)
console.log(a) //undefined (it hasn't been given a value).. BUT no error 

//vars are globally scoped (they're HOISTED)
//all named functions and vars are hoisted, thus globally scoped
var a = 5

console.log(a) //this, of course, prints 5

//Let's attempt the same thing with a let

//console.log(b) <- THIS IS ILLEGAL! lets and consts are NOT HOISTED

let b = 5

//This is a good thing IMO - we don't really need or want to access variables before they're defined
//So instead of getting an undefined value that may cause problems later... we just get an error from the jump
    //-More predictable and developer-friendly code

console.log("=========================Local Scope (block vs function scope)")

//block scope---/

//any variable inside a non-function block is block scoped
if(true){
    var c = "I'm a var in a block!"
    let d = "I'm a let in a block!"
}

console.log(c) //vars are globally scoped. So they're visible outside of a block. This can cause messy code!
//console.log(d) <- lets and consts aren't visible outside of their block!! More predictable code!

//function scope---/

//any variable defined in a function is function scoped
function scopeTest(){
    var e = "I'm a var in a function!"
}

console.log(e) // This will throw a ReferenceError

/* The main difference between block and function scope 

    -vars are not visible outside of a function they're defined in
    -BUT... vars ARE visbile outside of any non-function block they're defined in

    -lets and consts are only visible within the blocks they're defined in.

    Since we only really use let and const these dats, we don't worry about weird var behavior

    also, functions behave similarly to var in that they're globally scoped and hoisted
    but I actually like that behavior for functions. 
    It's common for every function to be defined at the very bottom of the script 
*/