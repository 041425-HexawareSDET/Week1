//TOPIC: Function that we'll EXPORT to our main JS file
//TOPIC: we've set a default parameter in this function, if no value is given for yearsTaken, it'll default to 5.
export function learnSkill(person, skillToLearn, yearsTaken = 5){

    console.log(person + " has chosen to learn " + skillToLearn)

    //TIMING EVENT - setInterval - performs an action repeatedly at a set millisecond interval
    let yearCount = 0

    let interval = setInterval(() => {

        yearCount++ //adds 1 to the counter
        console.log(person + " is on year " + yearCount)

        if(yearCount === yearsTaken){ //once the counter hits the yearsTaken value...
            clearInterval(interval) //break the cycle!
            console.log(yearsTaken + " years later... " + person + " has mastered " + skillToLearn)
        }

    }, 1000) //runs every second (1000 milliseconds)

}

//Writing a "Utils" style class/file with a bunch of importable functionality or variables is a common tactic
//Good way to separate ugly or verbose code to keep the main script clean
//Modularity is good to strvie for in general!