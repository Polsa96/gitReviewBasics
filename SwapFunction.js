// Create a function called `swap()` that receives an array and two parameters that are indices of the array.
// The function should swap the position of the values of the indices that we have sent as parameters. It returns the resulting array.

array=[`Mesirve`,`Cristiano Romualdo`,`Fernando Muralla`,`Ronalguiño`];

function swap(parameter,number1,number2){
    let bandera;
    if(parameter.length>number1 && parameter.length>number2){
        bandera=parameter[number1];
        parameter.splice(number1,1,parameter[number2]);
        parameter.splice(number2,1,bandera);
        console.log(parameter);

    }else{
        console.log(`Els valors escollits són massa grans`)
    }
}

swap(array,2,0);