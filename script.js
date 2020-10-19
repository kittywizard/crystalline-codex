let statArr = [];
let min = 9;
let max = 15;
let mod = 1;

let newPlus;
let newMinus;

const results = document.querySelector(".results");
const characterInfo = document.querySelector(".characterInfo"); //parent class
const submission = document.getElementById("form");
const hidden = document.querySelector(".hideMe");

const plusMod = document.querySelectorAll(".plus");
const minusMod = document.querySelectorAll(".minus");


//allows the page to reload upon hitting the reload button
//works because the button is there, just hidden

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => location.reload());

// form 101
// event listener needs to be on the FORM not the button
// then you can pull in the formdata
// formdata is pulling from each input's NAME not an id

// plusMod.addEventListener('click', () => modifier(statArr, mod));
// minusMod.addEventListener('click', () => modifier(statArr, mod));
submission.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let age = newData.get('age');
    
    hidden.style.display = "none"; //this hides the intro paragraph
    submission.style.display = "none";
    generateStats(name, age);

    event.preventDefault();
});


class Stat {
    constructor(name, num, modifier, total) {
        this.name = name;
        this.num = num;
        this.modifier = modifier;
        this.total = total;

        //can add functions etc. 
    }
}

function generateStats(name, age) {

    //loop through the number of stats, generate a unique name w/ random num for each one
    for(let i = 0; i < 5; i++) {
        switch(i) {
            case 0:
                //strength
                createClass("strStat", "Strength");
                break;
            case 1:
                //dexterity
                createClass("dexStat", "Dexterity");
                break;
            case 2:
                //stamina
                createClass("staStat", "Stamina");
                break;
            case 3: 
                //intelligence
                createClass("intStat", "Intelligence");
                break;
            case 4: 
                //wisdom
                createClass("wisStat", "Wisdom");
                break;
        }
    }
    
    //call function to display submitted info
    displayInfo(name, age);

    //call function to display all the stat information
    displayStats(statArr);

}

function createClass(stat, descriptor) {

    //modifier is 0 to start
    stat = new Stat(`${descriptor}`, randomNum(min, max), 0);

    statArr.push(stat);

}

function displayStats(statArr) {

    //need to figure out how to get the event listener to triggle on the buttons
    
    let statDisplay = document.createElement('div');


    //cycle through each stat and display it
    statArr.forEach(element => {

        let newStat = document.createElement('div');
        newPlus = document.createElement('button');
        newMinus = document.createElement('button');
        let numDisplay = document.createElement('span');

        //everyone needs a unique ID KILL ME NOW
        newPlus.id = `${element.name}PLUS`;
        newMinus.id = `${element.name}MIN`;

        newStat.textContent = `${element.name}: `;
        newPlus.textContent = "+";
        newMinus.textContent = "-";
        numDisplay.textContent = `${element.num}`;


        newPlus.classList.add('btn', 'plus');
        newMinus.classList.add('btn', 'minus');
    
        newStat.appendChild(newMinus);
        newStat.appendChild(numDisplay);
        newStat.appendChild(newPlus);
        results.appendChild(newStat);

    });

}

//randomNum function
let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 

function displayInfo(name, age) {
    let nameDisplay = document.createElement('h4');
    let ageDisplay = document.createElement('p');

    //style
    nameDisplay.classList.add('charName');
    ageDisplay.classList.add();

    nameDisplay.textContent = `Character Name: ${name}`;
    ageDisplay.textContent = `Age: ${age}`;

    results.style.display = 'block';

    characterInfo.appendChild(nameDisplay);
    characterInfo.appendChild(ageDisplay);
}

function modifier(statArr, mod) {
    //modifier = do i generate a new number for each stat? or just pick a set, standard number? 
    console.log("seriously is this even working??");
    if(mod > 0) {
        //if you still have the ability to modify your scores, run the event listener again
        console.log("test");
    } else {
        //delete the buttons
    
    }

}

