//Import for learnSkill, imported from Utils.js
import { learnSkill } from "./Utils.js"

//Gonna use this person object in our script - This is an "object literal"
const person = {
    name:"Billy",
    age:5
}

//TOPIC: Destructuring - a way to get individual values out of an object
const {name, age} = person
//This will look at the person object's fields to match variables to values

//We now have 2 variables - name and age - extracted from the object
console.log(name + " is " + age + " years old")

//Use the learnSkill function imported from Utils.js
learnSkill(name, "welding")

//---------------------------------------(Spread/Rest Operators)

//The spread operator is nice for passing the value of an Array into some other construct
const numbers = [1, 2, 3]
const evenMoreNumbers = [...numbers, 4, 5, 6] //[1, 2, 3, 4, 5, 6]

console.log(Math.max(...evenMoreNumbers)) //same as Math.max(1, 2, 3, 4, 5, 6)

//the rest operator is nice when you want to gather an unknown amount of values
function sum(...values){

    let result = 0

    for(const i of values){
        result += i
    }

    console.log("Sum: " + result)

}

//another example of using the spread operator (send all of the array values into the function)
sum(...numbers) 
sum(...evenMoreNumbers)

//NOTE: we don't NEED to use a spread operation in a method that takes a rest operation
//"The point is that you don't know how many elements will be passed in"
sum(1, 4, 7, 3, 9, 10, 15, 2, 16, 46) //This is fine and legal :)

/*Advanced object literals -

Our person Billy up there is an "object literal"
But the curriculum has a topic for "Advanced Object Literals"... what's that?
It's just a newer shorthand way to define object literals

Here's one example of their utility: use existing variables as keys for the object */
const foodName = "Pizza"
const topping = "Pepperoni"

const food = {
    foodName,
    topping
}

console.log(food)

//TIMING EVENT - setTimeout - lets us invoke a function after x amount of milliseconds
setTimeout(() => {
    console.log("This runs after 10 seconds")
}, 10000)