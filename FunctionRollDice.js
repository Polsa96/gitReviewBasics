// Create a function called **rollDice()** that receives as a parameter the number of faces that we want to have the die that the code inside the function must silumulate.
// As we have said, that the function uses the parameter to simulate a dice roll and return the result. 
// If you can't figure out how to make a random number don't worry! look for information about the javascript function **Math.random();**.

function rollDice(number){
    let random=Math.floor(Math.random()*number)+1;      //Torna un número del 0 al 4 (+1)
    console.log(random);
}

rollDice(5);    //Torna un numero del 1-5