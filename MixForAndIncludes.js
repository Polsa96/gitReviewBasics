// Given the following javascript uses forof to traverse the array of movies, generates a new array with the movie categories and prints by console the array of categories.
// Note that the categories should not be repeated. To filter the categories you can help yourself with the .includes() function.

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories=[];


function recollectGenre(param,categories){              //Acumula tots els generes
    for(let i=0;i<param.length;i++){
        categories.push(...param[i].categories);
        
    }
    deleteRepeatedGenres(categories);
}

// function deleteRepeatedGenres(categories){              //Elimina els generes que es repeteixen
//     let comptador=0;
//     for(let i=0;i<categories.length;i++){
//         for(let j=0;j<categories.length;j++){
//             if(categories[i]==categories[j]){
//                 comptador++;
//             }
//             if(categories[i]==categories[j]&&comptador>1){
//                 categories.splice(j,1);
//                 j--;
//             }
            
//         }
//         comptador=0;
//     }
// }

function deleteRepeatedGenres(categories){                  //Elimina els generes que es repeteixen i està fet amb -.includes()-
    let comptador=0;
    for(let i=0;i<categories.length;i++){
        for(let j=0;j<categories.length;j++){
            if(categories[j].includes(categories[i])){
                comptador++;
            }
            if(categories[j].includes(categories[i])&&comptador>1){
                categories.splice(j,1);
                j--;
            }
            
        }
        comptador=0;
    }
}

recollectGenre(movies, categories);
console.log(categories);