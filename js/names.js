let minName = 4;
let maxName = 9;
//let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 

//skipping q and x 
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
const alphabet = ["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];

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
    //capitalize the first letter in the array before joining
    name[0].toUpperCase();
    // combine the array into a string
    let fullName = name.join('');
    console.log(fullName);

}
function generateVowel() {
    name.push(vowels[randomNum(0, vowels.length)]);
}
function generateLetters() {
    name.push(consonants[randomNum(0, consonants.length)]);
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


//capitalize the first letter and ta da!
