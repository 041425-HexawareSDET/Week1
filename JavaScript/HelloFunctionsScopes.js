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



