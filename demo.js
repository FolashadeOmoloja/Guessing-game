maxValue= parseInt(prompt('max value')) ;
console.log(maxValue)
minValue= parseInt(prompt('min value')) ;
console.log(minValue)
let targetRange= Math.floor(Math.random()*(maxValue+1))+minValue;
console.log(targetRange)
let userGuess= prompt('input guess')
console.log(userGuess)
 let attempt=1;
 while (parseInt( userGuess) !==  targetRange ){
   if ( userGuess=== 'Quit'){
    break;
   } 
   attempt++
   
   if (userGuess > targetRange){
   prompt("Your Number is too high")
  } else if(userGuess<targetRange){
  prompt ("Your Number is too low") 
} else if ( userGuess== targetRange){
   alert(`Congratulations You Guessed right after ${attempt} guesses`)
//    break;
} else{
prompt("You Entered an invalid input try again")
}

}

