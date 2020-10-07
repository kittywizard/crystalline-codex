let statArr = [];
let min = 9;
let max = 15;
let mod = 1;

const results = document.querySelector(".results");
const characterInfo = document.querySelector(".characterInfo"); //parent class
const submission = document.getElementById("form");
const hidden = document.querySelector(".hideMe");

const resetBtn = document.getElementById('resetBtn');

// form 101
// event listener needs to be on the FORM not the button
// then you can pull in the formdata
// formdata is pulling from each input's NAME not an id

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

    let statDisplay = document.createElement('div');
    results.appendChild(statDisplay);
    
    //cycle through each stat and display it
    statArr.forEach(element => {

        //create element
        let newStat = document.createElement('div');
        //let newBtn = document.createElement('button');
        
        newStat.innerHTML = `${element.name}: 
                            <button class="minus-mod-btn">-</button>
                             ${element.num}
                            <button class="plus-mod-btn">+</button>`;

        newStat.classList.add('stat');

        //need to add an event listener to the new buttons
        statDisplay.appendChild(newStat);
    });

    const plusMod = document.querySelector(".plus-mod-btn");
    const minusMod = document.querySelector(".minus-mod-btn");
    plusMod.addEventListener('click', modifier(statArr, mod));
    minusMod.addEventListener('click', modifier(statArr, mod));
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

function modifier(arr, mod) {
    //hopefully, this will run when the modifier buttons are hit and we can modify the stats with the allocated number of points
    
}
// need to reset the site? show all the original form / header info again