// Given the following javascript uses forof and forin to find out how many times each sound has been added by users to favorite.
// To do this go through the list of users and use forin to collect the name of the sounds that the user has as favorites.
// Once you access them, think of the best way to make a count of each time that sound is repeated as favorite for each user.

// This exercise is a bit complicated with the current knowledge but...at the same time a good challenge and opportunity to understand
// that there are many ways to do things in javascript.

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

differentSounds=[];

for(user of users){
    for(key in user.favoritesSounds){
        //console.log(key);
        if(differentSounds.includes(key)==false){
            differentSounds.push(key);
        }
    }
}

console.log(differentSounds);