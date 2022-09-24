document.querySelector('#btn-1').addEventListener('click',collectValues);



function collectValues(){
    let maxValue= parseInt(document.querySelector('#maxValue').value) ;
    let minValue= parseInt(document.querySelector('#minValue').value) ;
    console.log(maxValue)
    console.log(minValue)
    if(!maxValue && !minValue){
        document.querySelector('.placetoview').innerText = "You entered an invalid Maximum and Minimum"
    }
    else if(!maxValue && minValue){
        document.querySelector('.placetoview').innerText = "You entered an invalid Maximum"
    }
   else  if(!minValue && maxValue){
        document.querySelector('.placetoview').innerText = "You entered an invalid Minimum"
    }

    else if(maxValue< minValue){
        document.querySelector('.placetoview').innerText = "You entered an invalid Range"
    }
   else{
    document.querySelector('.div1').style.display = 'none';
    document.querySelector('.div2').classList.toggle('hidden');
   }

}




document.querySelector('#btn-2').addEventListener('click',guess);


function guess(){
    maxValue= parseInt(document.querySelector('#maxValue').value) ;
    console.log(maxValue )
    minValue= parseInt(document.querySelector('#minValue').value) ;
    const targetRange= Math.floor(Math.random()*(maxValue-minValue))+minValue;
   
    console.log(targetRange)

    let userGuess= parseInt(document.querySelector('#userGuess').value) ;
    console.log(userGuess)
    let attempt=+ 1;
     if (userGuess !== targetRange  ){
    
       attempt= attempt++;
         if (userGuess > targetRange){
       document.querySelector('#placetosee').innerText= "Your Number is too high"
      } else if(userGuess<targetRange){
       document.querySelector('#placetosee').innerText= "Your Number is too low"
    } else if (userGuess > maxValue){
        document.querySelector('#placetosee').innerText= "Your guess is above the range"            
    }  else if (userGuess < minValue){
        document.querySelector('#placetosee').innerText= "Your guess is below the range"            
    } else{
       document.querySelector('#placetosee').innerText= "You Entered an invalid input try again"
    }
 
 }
 if ( parseInt(userGuess)== targetRange){
    document.querySelector('#placetosee').innerText= `Congratulations You Guessed right after ${attempt} guesses`
 
 }
}

document.querySelector('#btn-3').addEventListener('click',quit);  
function quit(){
    document.querySelector('#placetosee').innerText= "You Quit, Game Over"
}

document.querySelector('#btn-4').addEventListener('click',goBack)
function goBack(){

    document.querySelector('.div1').style.display = 'block'
    document.querySelector('.div2').classList.toggle('hidden')

}


