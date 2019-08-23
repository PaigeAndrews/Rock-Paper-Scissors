let userInput = prompt("Choose Paper, Rock, or Scissors");
let computerInput = Math.random();


console.log(computerInput)

if (computerInput <= .33){
  computerInput = "Paper"
} else if (computerInput >= .66) {
  computerInput = "Rock"
} else (computerInput = "Scissors");
      
console.log(computerInput)
if (userInput == computerInput) {
  console.log ("It was a draw!") 
}
else if (userInput == "Rock" && computerInput == "Paper") {
  console.log ("You lose! Sorry!!") 
}
else if (userInput == "Paper" && computerInput == "Scissors") {
  console.log ("You lose! Sorry!!") 
}
else if (userInput == "Scissors" && computerInput == "Rock") {
  console.log ("You lose! Sorry!!") 
}
else {
  console.log ("You win! Fantastic!!") 
};


//let myArray = ["first", "second", "third"]

//console.log(myArray)
