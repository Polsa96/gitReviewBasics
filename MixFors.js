// Given the following javascript uses forof and forin to average the volume of all the favorite sounds that users have.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumeInfo ={
    totalVolume:0,
    totalCount:0,
}

for(user of users){

    for(key in user.favoritesSounds){
        let favouriteSound=user.favoritesSounds[key];
        //console.log(key, favouriteSound);
        volumeInfo.totalVolume+=favouriteSound.volume;
        volumeInfo.totalCount++;

    }           
            
      
}

console.log('The average volume of all sounds is: '+ volumeInfo.totalVolume/volumeInfo.totalCount);


