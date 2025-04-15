//Here's our first "print statement"
console.log("==========================(Printing/Declaring Variables)")

//JS is LOOSELY TYPED, so we can declare variables without declaring a datatype
//We can also reassign variables to different types easily (implicit type coercion)
a = 100
a = true
a = null
a = "I am a String now"

//JavaScript will assign variables with the "var" keyword by default
var b = "I am a var by default! I didn't need to specify var when declaring."

let b2 = "I am a let! More modern way to declare variables. We typically use these"

const b3 = "I am a const! Like 'final' in Java - my value won't change."

//JavaScript Array - JS Arrays can hold any datatype and grow/shrink in size easily
let arr = [10, "some string", false, null, {field1:5, field2:"something else"}]
//We can use push() to add values to the end of the Array
arr.push("Hi I'm some other value")

console.log(arr) //print the array just to see it

//Template literals allow us to make multi-line console.logs
//They use the `backtick` to allow us to make new lines from within the console.log
console.log(`
    I
    am
    a
    template
    literal. 
    Here's the value of a: ${a}`)

//NaN (Not a Number) - we get this datatype when a mathematical operation fails
console.log("string"/5)

console.log("=========================Testing Type Coercion")

//Let's see what JS decides for the data types for these variables

let testVar = "5" * 5
console.log("String times number is: " + testVar + " " + typeof testVar)
//number - JS assumes we're doing math. Pretty much every operator besides + will result in a number

let testVar2 = "5" + 5
console.log("String plus number is: " + testVar2 + " " + typeof testVar2)
//string - JS assumes we're string concatenating. If we have "string" + anything, it's concatenation

//Let's see the + operator with more than 2 values

let testVar3 = 5 + 5 + "5"
console.log("number plus number plus string is: " + testVar3 + " " + typeof testVar3)
//string 105: 5 + 5 = 10 ... 10 + "5" = "105"

let testVar4 = 5 + "5" - 5
console.log("number plus string minus number is: " + testVar4 + " " + typeof testVar4)
//number 50: 5 + "5" = "55" ... "55" - 5 = 50

//RULE 1: it's all math until a string is in the mix
//RULE 2: any operator BESIDES + between a string and a number becomes a number 

console.log("===============================(Truthy/Falsy)")

//testing out some truthy/falsy values

if(0){
    console.log("0 is falsy, so this if block won't run")
} else if (""){
    console.log('Sorry, "" is falsy as well, I won\'t print either')
} 

if(1){
    console.log("I will print. any non-zero number is truthy")
}

if(1 == true){
    console.log("I will print. 1 == true")
}

if(2){
    console.log("I will print. 2 is truthy")
}

if(2 == true){
    console.log("????? Why won't this print? Isn't 2 truthy?")
} 

//While an non-zero number IS truthy, the boolean true evaluates to 1.
//So comparing any number besides 1 to the boolean true will return false.


/* Truthy and Falsy are really useful in the real world 

    let number = 0

    -Some code runs here that gives number a non-zero value if it succeeds

    if(number) {
        doSomething.....
    }

*/