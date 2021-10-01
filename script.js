let statArr = [];
let min = 9;
let max = 15;
let mod = 1;

let newPlus;
let newMinus;

const results = document.querySelector(".results");
const characterInfo = document.querySelector(".characterInfo"); //parent class
const hidden = document.querySelector(".hideMe");
const btn = document.getElementById('submit');

// const plusMod = document.querySelectorAll(".plus");
// const minusMod = document.querySelectorAll(".minus");


//allows the page to reload upon hitting the reload button

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => location.reload());

// form 101
// event listener needs to be on the FORM not the button
// formdata is pulling from each input's NAME not an id

submit.addEventListener('click', event => {
    hidden.style.display = "none"; //this hides the intro paragraph
    submission.style.display = "none";
    generateStats(name, age);

    event.preventDefault();
});

class Stat {
    constructor(name, num, modifier, total, id) {
        this.name = name;
        this.num = num;
        this.modifier = modifier;
        this.total = total;
        this.id = id;
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

    //pretty sure the STAT param is useless? lol

    //modifier is 0 to start
    stat = new Stat(`${descriptor}`, randomNum(min, max), 0);

    statArr.push(stat);


}

function displayStats(statArr) {
    
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

    //EVENT LISTENER HELL. TURN BACK NOW

    const STR = document.getElementById('StrengthPLUS');
    STR.addEventListener('click', () => modifier(statArr, mod, true, "str"));

    const DEX = document.getElementById('DexterityPLUS');
    DEX.addEventListener('click', () => modifier(statArr, mod, true, "dex"));

    const STA = document.getElementById('StaminaPLUS');
    STA.addEventListener('click', () => modifier(statArr, mod, true));

    const INT = document.getElementById('IntelligencePLUS');
    INT.addEventListener('click', () => modifier(statArr, mod, true));

    const WIS = document.getElementById('WisdomPLUS');
    WIS.addEventListener('click', () => modifier(statArr, mod, true));

    const STRmin = document.getElementById('StrengthMIN');
    STRmin.addEventListener('click', () => modifier(statArr, mod, false));

    const DEXmin = document.getElementById('DexterityMIN');
    DEXmin.addEventListener('click', () => modifier(statArr, mod, false));

    const STAmin = document.getElementById('StaminaMIN');
    STAmin.addEventListener('click', () => modifier(statArr, mod, false));

    const INTmin = document.getElementById('IntelligenceMIN');
    INTmin.addEventListener('click', () => modifier(statArr, mod, false));

    const WISmin = document.getElementById('WisdomMIN');
    WISmin.addEventListener('click', () => modifier(statArr, mod, false));
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

function modifier(statArr, mod, boo) {
    //boo determines whether it's a plus or minus hit
    if(mod != 0) {
        if(boo) {
           //need to determine which was clicked
           //
            
    
        } else {
            statAdjustment(false, statArr, mod);
            //console.log(statArr[0].total);
            //need to adjust the 0 to whichever button was hit
        }

    } else {
        console.mod('no more modifying!');
        //need to remove the buttons

    }
 
}

function statAdjustment(boo, statArr, mod) {
    //one function to handle the math
    for(let i = 0; i < statArr.length; i++) {
        if(boo) {
            statArr[i].total = statArr[i].num + mod;
            mod--;
            return;
        } else {
            statArr[i].total = statArr[i].num - mod;
            mod++;
            return;
        }

        //determine the final count of mod
    }
}