//PokeAPI base url - making a variable that holds the base URL for PokeAPI for the sake of cleaner/standardized code
const url = "https://pokeapi.co/api/v2/pokemon/"

//DOM selection for the elements we'll fill with pokemon data after the fetch request
const pokename = document.getElementById("pokename")
const poketype = document.getElementById("poketype")
const pokenum = document.getElementById("pokenum")
const pokepic = document.getElementById("pokepic")

//when the user clicks the search button, take their input and use it in the fetchData function
document.getElementById("btn").onclick = fetchData

/* This function will return some Pokemon data from PokeAPI 
    It's going to use a fetch request to return a promise object
    The promise object will get filled with Pokemon data OR it will fail */
async function fetchData(){

    //First, we need to gather the user input from the input box
    const userInput = document.getElementById("userInput").value

    console.log(userInput) //Just to see the value in console
    
    //With this user input data, we can use fetch() to send a GET request to PokeAPI
    //(Fetch sends a GET by default by the way)

    try{
        const response = await fetch(url + userInput)

        //turn the reponse data into a JavaScript object
        const data = await response.json()

        console.log(data) //See the data in the console!

        renderHTML(data)
    } catch {
        //TODO: catch errors
    }

}

//This function will take in the JS pokemon data as a parameter and render it on the page
function renderHTML(data){

    //populate the table with data (using the DOM selected variables at the top of the script)

    pokename.innerText = data.name

    //render type - loop through the types array in the data
    //then add each type name to this "types" string

    //OLD WAY - still works but less elegant!

    // let types = ""

    // for(let element of data.types){
    //     types += element.type.name + " "
    // }

    // poketype.innerText = types

    //trying a fancier way - the reduce() function
    //acc == "accumulator", this is what accumulates all the values into one
    //element == the type object we're extract the name from
    //the "" at the end is our initial value that gets added to. What our accumulator starts with
    poketype.innerText = data.types.reduce((acc, element) => acc + element.type.name + " ", "")

    pokenum.innerText = data.id

    //pokepic is an <img> element, so we deal with it a little differently here
    //We'll set the "src" attribute to the pokemon's image
    pokepic.setAttribute("src", data.sprites.front_default)

    //Add the pokemon image to the collection at the bottom of the page using createElement() and appendChild()
    const img = document.createElement("img")
    img.src = data.sprites.front_default

    document.getElementById("pokeCollection").appendChild(img)

}