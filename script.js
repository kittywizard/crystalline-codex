let statArr = [];
let min = 9;
let max = 15;

let results = document.querySelector(".results");
let submission = document.getElementById("form");

// form 101
// event listener needs to be on the FORM not the button
// then you can pull in the formdata
// formdata is pulling from each input's NAME not an id

submission.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let age = newData.get('age');
    
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

    //display all the stats on page

    //create an element to display all of this
    let statDisplay = document.createElement('div');
    results.appendChild(statDisplay);

    //cycle through each stat and display it
    statArr.forEach(element => {

        //create element
        let newStat = document.createElement('div');

        //set content to element
        newStat.textContent = element.name;
        newStat.classList.add('stat');

        //append child
        statDisplay.appendChild(newStat);
    });
}

//write another function??

function createClass(stat, descriptor) {

    stat = new Stat(`${descriptor}`, randomNum(min, max), 1);
    let total = stat.num + stat.modifier;
    stat.total = total;
    statArr.push(stat);

}


//randomNum function
let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 

function displayInfo(name, age) {
    let nameDisplay = document.createElement('div');
    let ageDisplay = document.createElement('div');

    nameDisplay.textContent = name;
    ageDisplay.textContent = age;

    nameDisplay.classList.add('character');
    ageDisplay.classList.add('character');
    
    results.style.display = 'block';
    results.appendChild(nameDisplay);
    results.appendChild(ageDisplay);

    let statDisplay = document.createElement('section');
    results.appendChild(statDisplay);
}