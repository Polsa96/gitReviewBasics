// Create a function called findArrayIndex that receives as parameters an array of texts and a text and returns the position 
// of the array when the value of the array is equal to the value of the text you sent as
// parameter. Make several examples and test them.

let arrays = [`Caracol`,`Mosquito`,`Salamandra`,`Ajolote`];


function findArrayIndex(arrays,text){
    let comptador=0;
    for(array of arrays){
        if(text==array){
            console.log(`El texto se encuentra en el array numero ${arrays.indexOf(text)}`);
            comptador++;
        }
    }
    if(comptador==0){
        console.log(`No hi ha cap paraula que es digui ${text}`);
    }

}

findArrayIndex(arrays,`Salamandra`);