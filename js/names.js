//generate a random number between min and max. this will be the name's length
let minName = 4;
let maxName = 9;
//let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 

//skipping q and x lol
let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];
let vowels = ["a", "e", "i", "o", "u"];
let alphabet = ["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];

const regexVowels = /[aeiouy]/g;
let name = [];

function generateName() {
    let nameLength = randomNum(minName, maxName); 
    for(let i = 0; i < nameLength; i++) {
        //make sure there are vowels at some point 
        if((nameLength % 2 === 0) && (i % 2 === 0)) {
            console.log(i);
            generateVowel();
        }
        else {
            generateLetters();
        }

    }

    // combine the array into a string
    //name[0].toUpperCase();
    let fullName = name.join('');
    console.log(fullName);

    //no more than three consonants in a row
}
function generateVowel() {
    name.push(vowels[randomNum(0, 4)]);
}
function generateLetters() {
    name.push(consonants[randomNum(0, 19)]);
}

generateName();


let firstNameChunk = 
[
    "Tay",
    "Ray",
    "Shay",
    "Ary",
    "Pol",
    "Wry",
    "Mai",
    "Mei",
    "Lili",
    "Lef",
    "Aria",
    "Ari"
];
let endNameChunk = 
[
    "wen",
    "sil",
    "li",
    "ryn",
    "sen",
    "myn",
    "lly",
    "dew",
    "ida",
    "ter"
]

// will need to mash parts together


//capitalize the first letter and ta da!
